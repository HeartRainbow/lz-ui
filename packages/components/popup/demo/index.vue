<template>
  <div>
    <demoBlock title="通过v-model绑定开启或关闭的属性">
      <lz-button
        type="primary"
        @click="show=true"
      >
        显示popup
      </lz-button>
      <lz-popup v-model="show">
        dde
      </lz-popup>
    </demoBlock>
    <demoBlock title="显示位置">
      <div style="display: flex;gap: 10px;">
        <lz-button
          type="primary"
          @click="openShow1('bottom')"
        >
          底部显示
        </lz-button>
        <lz-button
          type="primary"
          @click="openShow1('top')"
        >
          顶部显示
        </lz-button>
        <lz-button
          type="primary"
          @click="openShow1('left')"
        >
          左侧显示
        </lz-button>
        <lz-button
          type="primary"
          @click="openShow1('right')"
        >
          右侧显示
        </lz-button>
      </div>
      <lz-popup
        :position="position"
        v-model="show1"
        title="我是标题"
        close
      >
        <div class="test">
          标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题
        </div>
      </lz-popup>
    </demoBlock>
    <demoBlock title="设置圆角">
      <lz-button
        type="primary"
        @click="show2=true"
      >
        打开
      </lz-button>
      <lz-popup
        round
        position="center"
        v-model="show2"
      >
        <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
      </lz-popup>
    </demoBlock>
    <demoBlock title="开启关闭图标">
      <lz-button
        type="primary"
        @click="show33=true"
      >
        打开
      </lz-button>
      <lz-popup
        round
        close
        position="bottom"
        v-model="show33"
      >
        <div>标标题标标题标题标标标标标题标标题标标题标题</div>
      </lz-popup>
    </demoBlock>
    <demoBlock title="是否显示遮罩">
      <lz-button
        type="primary"
        @click="show11=true"
      >
        打开
      </lz-button>
      <lz-popup
        round
        close
        :overlay="false"
        position="bottom"
        v-model="show11"
      >
        <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
      </lz-popup>
    </demoBlock>
    <demoBlock title="允许点击遮罩后关闭popup">
      <lz-button
        type="primary"
        @click="show22=true"
      >
        打开
      </lz-button>
      <lz-popup
        round
        close
        :click-overlay-close="false"
        position="bottom"
        v-model="show22"
      >
        <div>标标题标标题标题标标标标标题标标题标题标标标题标标标标题标标题标题标标标题标标题标题标标标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
      </lz-popup>
    </demoBlock>
    <demoBlock title="是否开启操作按钮">
      <lz-button
        type="primary"
        @click="show44=true"
      >
        打开
      </lz-button>
      <lz-popup
        round
        action
        position="bottom"
        v-model="show44"
      >
        <div>标标题标标题标题标标标标标题标标题标标题标题</div>
      </lz-popup>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvPopup, uvButton } from 'lz-ui'
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)

const show11 = ref(false)
const show22 = ref(false)
const show33 = ref(false)
const show44 = ref(false)

const position = ref('bottom')
const openShow1 = (pos) => {
  show1.value = true
  position.value = pos
}
</script>

<style lang="scss" scoped>

</style>
