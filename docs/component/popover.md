<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('popover')
})

</script>

## 基本使用

通过 `v-model` 绑定是否显示

```html
<lz-popover v-model="test" :list="list" key-name="name">
  <template #reference>
    <lz-button @click="test=true">
      打开
    </lz-button>
  </template>
</lz-popover>
```

## 配置渲染列表

通过 `list` 属性传入渲染的数组,通过 `keyName` 指定展示的文字,子项通过 `disabled` 属性设置子项禁止点击

 ```vue
<template>
    <lz-popover v-model="test1" :list="list" key-name="name">
      <template #reference>
        <div style="margin-left: 100px;">
          <lz-button @click="test1=true">
            打开
          </lz-button>
        </div>
      </template>
    </lz-popover>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([
  {
    name: '选项一'
  },
  {
    name: '选项二',
    disabled: true
  }, {
    name: '选项三'
  }

])
</script>
 ```

## 关闭配置

`closeOnClickAction` 是否在点击选项后关闭, `closeOnClickOutside` 是否在点击外部元素后关闭菜单

```html
<lz-popover
  v-model="test2"
  :list="list"
  close-on-click-action
  :close-on-click-outside="false"
  key-name="name"
>
  <template #reference>
    <div style="margin-left: 200px;">
      <lz-button @click="test2=true">
        打开
      </lz-button>
    </div>
  </template>
</lz-popover>
```

## 自定义内容

```html
<lz-popover
  v-model="test3"
>
  <template #reference>
    <div style="margin-left: 20px;">
      <lz-button @click="test3=true">
        打开
      </lz-button>
    </div>
  </template>
  <template #default>
    <div style="padding: 10px;">
      <div>无论我们能活多久，享受只有无法分割的此刻</div>
      <div>无论我们能活多久</div>
      <div>我们能够享受的只有无法分割的此刻</div>
    </div>
  </template>
</lz-popover>
```

 ## props

| 属性                |             含义             |  类型   | 默认值 |
| ------------------- | :--------------------------: | :-----: | -----: |
| modelValue          |      双向绑定的是否显示      | Boolean |  false |
| list                |          渲染的列表          |  Array  |      - |
| keyName             |            关键字            | String  |      - |
| closeOnClickAction  |     是否在点击选项后关闭     | Boolean |  false |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | Boolean |   true |

## events

| 事件名称 |    含义    |           参数 |
| -------- | :--------: | -------------: |
| change   | 子项选中后 | 当前的子项数据 |

## css变量

```css
  --lz-popover-z-index: 2000;
  --lz-popover-color: #323233;
  --lz-popover-bg-color: #ffffff;
  --lz-popover-content-box-shadow: 0 2px 12px rgb(50 50 51 / 12%);
  --lz-popover-content-border-radius: 8px;
  --lz-popover-content-item-padding: 0 16px;
  --lz-popover-content-item-width: 128px;
  --lz-popover-content-item-height: 44px;
  --lz-popover-content-item-active-bg-color: #f2f3f5;
  --lz-popover-transition-time: 0.15s;
  --lz-popover-arrow-postion-distance: 25px;
  --lz-popover-content-item-text-border-bottom: 1px solid #f7f8f9;
```