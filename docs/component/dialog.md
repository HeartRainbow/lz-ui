<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('dialog')
})

</script>

## 基本使用

通过 `title` 和 `message` 设置标题和内容

```vue
<template>
  <div>
    <lz-button
      type="primary"
      @click="openDialog"
    >
      打开dialog
    </lz-button>
  </div>
</template>

<script setup>
import { showDialog } from '../../../index'

const openDialog = () => {
  showDialog({
    title: 'Dialog',
    message: '代码是写出来给人看的，附带能在机器上运行。'
  })
}
</script>
```

 ## props

| 属性                  |         含义         |  类型   |    默认值 |
| --------------------- | :------------------: | :-----: | --------: |
| title                 |         标题         | String  |         - |
| message               |         内容         | String  |         - |
| showConfirmButton     |   是否显示确定按钮   | Boolean |      true |
| confirmButtonText     |   确定按钮文字名称   | String  |    '确认' |
| confirmButtonColor    |   确定按钮文字颜色   | String  | '#1989fa' |
| confirmButtonDisabled |   禁止确定按钮点击   | Boolean |     false |
| showCancleButton      |   是否显示取消按钮   | Boolean |     false |
| cancleButtonText      |   取消按钮文字名称   | String  |    '取消' |
| cancleButtonColor     |   取消按钮文字颜色   | String  | '#000000' |
| cancelButtonDisabled  |   禁止取消按钮点击   | Boolean |     false |
| overlay               | 是否显示遮罩背景颜色 | Boolean |      true |
| closeOnClickOverlay   | 是否可以点击遮罩关闭 | Boolean |     false |

## events

| 事件名称 |      含义      | 参数 |
| -------- | :------------: | ---: |
| cancle   | 点击取消按钮时 |    - |
| confim   | 点击确定按钮时 |    - |

## css变量

```css
  --lz-dialog-width: 90%;
  --lz-dialog-min-height: 100px;
  --lz-dialog-border-radius: 16px;
  --lz-dialog-bg-color: #ffffff;
  --lz-dialog-transition-time: 0.3s;
  --lz-dialog-title-padding: 15px 0 10px;
  --lz-dialog-title-text-align: center;
  --lz-dialog-title-color: #323233;
  --lz-dialog-content-padding: 8px 24px 26px;
  --lz-dialog-content-font-size: 14px;
  --lz-dialog-content-color: #646566;
  --lz-dialog-bottom-button-height: 48px;
  --lz-dialog-bottom-button-border-top: 1px solid #f7f8f9;
  --lz-dialog-bottom-button-center-line-color: #f7f8f9;
  --lz-dialog-confim-active-bg-color: #e6e6e6;
  --lz-dialog-cancle-bg-color: #e6e6e6;
  --lz-dialog-button-undisabled-color: #646566;
```