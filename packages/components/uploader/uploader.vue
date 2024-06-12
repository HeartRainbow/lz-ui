<template>
  <div class="lz-uploader">
    <div class="lz-uploader-wrapper">
      <template v-for="(item,index) in modelValue">
        <div
          class="lz-uploader-img-wrapper"
          v-if="modelValue && previewImage"
          :key="index"
        >
          <img
            @click="clickPreview(item)"
            :src="item.content || item.url"
            class="lz-uploader-img"
          >
          <div v-if="item.status === 'uploading' || item.status === 'failed'" class="lz-uploader-mask">
            <div v-if="item.status === 'uploading'" class="lz-uploader-uploading-wrapper">
              <div class="lz-uploader-uploading" />
              <div>
                {{ item.message || '上传中...' }}
              </div>
            </div>
            <div v-if="item.status === 'failed'" class="lz-uploader-failed-wrapper">
              <lz-icon
                size="22"
                name="close"
                color="#fff"
              />
              <div>
                {{ item.message || '上传失败' }}
              </div>
            </div>
          </div>
          <div @click="deleteFile(item,index)" class="lz-uploader-delete" v-if="item.status !== 'uploading' && deletable">
            <slot name="preview-delete">
              <div class="lz-uploader-delete-shadow" />
              <lz-icon
                class="lz-uploader-delete-icon"
                size="14"
                name="close"
                color="#fff"
              />
            </slot>
          </div>
          <slot name="preview-cover" :item="item" :file="item.file" />
        </div>
      </template>
      <div v-show="!(modelValue.length >= +maxCount)" class="lz-uploader-upload-wrapper" @click="clickUpload">
        <slot>
          <div class="lz-uploader-upload">
            <lz-icon
              size="26"
              name="photograph"
              :color="disabled? '#edeeef':'#dcdee0'"
            />
          </div>
        </slot>
        <input
          ref="inputRef"
          class="lz-uploader-input"
          type="file"
          :disabled="disabled"
          @change="change"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import uvIcon from '../icon'
import { readFileContent, isOversize, toArray, filterFiles } from './utils.js'
import { isPromise } from '../../utils'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  deletable: {
    type: Boolean,
    default: true
  },
  maxCount: {
    type: [Number, String, Function],
    default: Infinity
  },
  maxSize: {
    type: Number,
    default: Infinity
  },
  beforeRead: {
    type: Function
  },
  afterRead: {
    type: Function
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  // 文件读取结果类型，可选值为 file text
  resultType: {
    type: String,
    default: 'dataUrl'
  },
  // 是否在上传完成后展示预览图
  previewImage: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['oversize', 'clickUpload', 'clickPreview', 'delete', 'update:modelValue'])

const clickUpload = (event) => emit('clickUpload', event)
const clickPreview = (item) => emit('clickPreview', item)

const inputRef = ref()

const reuploadIndex = ref(-1)

const resetInput = () => {
  if (inputRef.value) {
    inputRef.value.value = ''
  }
}
const getDetail = (index = props.modelValue.length) => ({
  name: props.name,
  index
})

const onAfterRead = (items) => {
  resetInput()

  if (isOversize(items, props.maxSize)) {
    if (Array.isArray(items)) {
      const result = filterFiles(items, props.maxSize)
      items = result.valid
      emit('oversize', result.invalid, getDetail())

      if (!items.length) {
        return
      }
    } else {
      emit('oversize', items, getDetail())
      return
    }
  }
  items = reactive(items)
  if (reuploadIndex.value > -1) {
    const arr = [...props.modelValue]
    arr.splice(reuploadIndex.value, 1, items)
    emit('update:modelValue', arr)
    reuploadIndex.value = -1
  } else {
    emit('update:modelValue', [...props.modelValue, ...toArray(items)])
  }

  if (props.afterRead) {
    props.afterRead(items, getDetail())
  }
}

const readFile = (files) => {
  const { maxCount, modelValue, resultType } = props
  if (Array.isArray(files)) {
    const remainCount = +maxCount - modelValue.length
    console.log(remainCount)
    if (files.length > remainCount) {
      files = files.slice(0, remainCount)
    }
    Promise.all(
      files.map((file) => readFileContent(file, resultType))
    ).then((contents) => {
      const fileList = (files).map((file, index) => {
        const result = {
          file,
          status: '',
          message: ''
        }

        if (contents[index]) {
          result.content = contents[index]
        }

        return result
      })
      onAfterRead(fileList)
    })
  } else {
    readFileContent(files, resultType).then((content) => {
      const result = {
        file: files,
        status: '',
        message: ''
      }

      if (content) {
        result.content = content
      }
      onAfterRead(result)
    })
  }
}

const change = (event) => {
  const { files } = event.target
  if (props.disabled || !files || !files.length) {
    return
  }
  const file = files.length === 1 ? files[0] : [].slice.call(files)
  if (props.beforeRead) {
    const response = props.beforeRead(file, getDetail())

    if (!response) {
      resetInput()
      return
    }

    if (isPromise(response)) {
      response
        .then((data) => {
          if (data) {
            readFile(data)
          } else {
            readFile(file)
          }
        })
        .catch(resetInput)
      return
    }
  }
  readFile(file)
}

const deleteFile = (item, index) => {
  const fileList = props.modelValue.slice(0)
  fileList.splice(index, 1)

  emit('update:modelValue', fileList)
  emit('delete', item, getDetail(index))
}

</script>
<script>
export default {
  name: 'UvUploader'
}
</script>

<style lang="scss">
:root {
  --lz-uploader-upload-size-width: 80px;
  --lz-uploader-upload-size-height: 80px;
  --lz-uploader-upload-gap: 8px;
  --lz-uploader-border-radius: 6px;
  --lz-uploader-delete-shadow-size: 20px;
  --lz-uploader-delete-shadow-border-radius: 0 6px 0 6px;
  --lz-uploader-delete-shadow-background: rgb(0 0 0 / 40%);
  --lz-uploader-img-object-fit: cover;
  --lz-uploader-upload-wrapper-bg-color: #f7f8fa;
  --lz-uploader-mask-background: rgb(50 50 51 / 88%);
  --lz-uploader-mask-color: #ffffff;
  --lz-uploader-uploading-wrapper-gap: 10px;
  --lz-uploader-uploading-wrapper-font-size: 12px;
  --lz-uploader-uploading-size: 15px;
  --lz-uploader-uploading-margin-right: 5px;
}
.lz-uploader {
  position: relative;
  display: inline-block;
  .lz-uploader-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--lz-uploader-upload-gap);
    .lz-uploader-img-wrapper {
      position: relative;
      overflow: hidden;
      width: var(--lz-uploader-upload-size-width);
      height: var(--lz-uploader-upload-size-height);
      border-radius: var(--lz-uploader-border-radius);
      .lz-uploader-delete {
        position: absolute;
        top: 0;
        right: 0;
        .lz-uploader-delete-shadow {
          width: var(--lz-uploader-delete-shadow-size);
          height: var(--lz-uploader-delete-shadow-size);
          border-radius: var(--lz-uploader-delete-shadow-border-radius);
          background: var(--lz-uploader-delete-shadow-background);
        }
        .lz-uploader-delete-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .lz-uploader-img {
        width: 100%;
        height: 100%;
        object-fit: var(--lz-uploader-img-object-fit);
      }
      .lz-uploader-mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--lz-uploader-mask-color);
        background: var(--lz-uploader-mask-background);
        flex-direction: column;
        .lz-uploader-uploading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--lz-uploader-uploading-wrapper-gap);
          font-size: var(--lz-uploader-uploading-wrapper-font-size);
          .lz-uploader-uploading {
            position: relative;
            margin-right: var(--lz-uploader-uploading-margin-right);
            width: var(--lz-uploader-uploading-size);
            height: var(--lz-uploader-uploading-size);
            border: 2px solid var(--lz-uploader-mask-color);
            border-top-color: var(--lz-uploader-mask-color);
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-radius: 100%;
            animation: circle infinite  0.75s linear;
          }
        }
        .lz-uploader-failed-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--lz-uploader-uploading-wrapper-gap);
          font-size: var(--lz-uploader-uploading-wrapper-font-size);
        }
      }
    }
    .lz-uploader-upload-wrapper {
      position: relative;
      display: inline-block;
      border-radius: var(--lz-uploader-border-radius);
      background-color: var(--lz-uploader-upload-wrapper-bg-color);
      .lz-uploader-upload {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--lz-uploader-upload-size-width);
        height: var(--lz-uploader-upload-size-height);
      }
      .lz-uploader-input {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }
  }
}

</style>
