<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('popup')
})

</script>

## 通过v-model绑定开启或关闭的属性

```html
<lz-popup v-model="show">
  dde
</lz-popup>
```

## 显示位置

通过 `position` 设置,可选项为`bottom` `top` `center` `left` `right`，默认底部显示

```html
<lz-popup
  position="bottom"
  v-model="show1"
  title="我是标题"
  close
>
  <div class="test">
    标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题
  </div>
</lz-popup>
```

## 设置圆角

通过 `round` 设置

```html
<lz-popup
  round
  position="center"
  v-model="show2"
>
  <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
</lz-popup>
```

## 开启关闭图标

通过 `close` 设置开启或关闭，默认关闭

```html
<lz-popup
  round
  close
  position="bottom"
  v-model="show33"
>
  <div>标标题标标题标题标标标标标题标标题标标题标题</div>
</lz-popup>
```

## 是否显示遮罩

通过 `overlay` 设置开启或关闭，默认开启

```html
<lz-popup
  round
  close
  :overlay="false"
  position="bottom"
  v-model="show11"
>
  <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
</lz-popup>
```

## 允许点击遮罩后关闭popup

通过 `clickOverlayClose` 设置开启或关闭，默认开启

```html
<lz-popup
  round
  close
  :click-overlay-close="false"
  position="bottom"
  v-model="show22"
>
  <div>标标题标标题标题标标标标标题标标题标题标标标题标标标标题标标题标题标标标题标标题标题标标标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
</lz-popup>
```

## 是否开启操作按钮

通过 `aciton` 设置开启或关闭，默认关闭。开启后可以通过 `leftName` 设置左边按钮名称，通过 `rightName` 设置右边按钮名称

```html
<lz-popup
  round
  action
  position="bottom"
  v-model="show44"
>
  <div>标标题标标题标题标标标标标题标标题标标题标题</div>
</lz-popup>
```

## props

| 属性              |        含义         |  类型   |   默认值 |
| ----------------- | :-----------------: | :-----: | -------: |
| modelValue        | v-model是否显示弹框 | Boolean |    false |
| position          |    弹框显示位置     | String  | 'bottom' |
| bgColor           |      背景颜色       | String  |   '#fff' |
| round             |   是否为圆角弹框    | Boolean |    false |
| title             |      弹框标题       | String  |       '' |
| padding           |   是否自带内边距    | Boolean |     true |
| overlay           |   是否开启遮罩层    | Boolean |     true |
| clickOverlayClose | 点击遮罩层关闭弹框  | Boolean |     true |
| height            |      弹框高度       | String  |   'atuo' |
| action            |    开启按钮操作     | Boolean |    false |
| close             |  是否显示关闭按钮   | Boolean |    false |
| leftName          |    左边按钮名称     | String  |   '取消' |
| rightName         |    右边按钮名称     | String  |   '确定' |

## events

| 事件名称 |       含义       | 参数 |
| -------- | :--------------: | ---: |
| close    |   弹框关闭事件   |    - |
| confim   | 弹框点击确定事件 |    - |
| cancle   | 弹框点击取消事件 |    - |

## css变量

```css
  --lz-popup-transition-time: 0.3s;
  --lz-popup-border-radius: 16px;
  --lz-popup-left-right-max-width: 70%;
  --lz-popup-button-font-size: 14px;
  --lz-popup-button-border-radius: 6px;
  --lz-popup-button-padding: 12px 45px;
  --lz-popup-button-box-shadow: rgb(0 0 0 / 15%) 0 2px 8px;
  --lz-popup-button-confim-color: #ffffff;
  --lz-popup-button-cancle-color: #1fa45d;
  --lz-popup-button-confim-bg-color: #07c160;
  --lz-popup-button-cancle-bg-color: #f0f0f0;
  --lz-popup-content-top-height: 30px;
  --lz-popup-content-title-font-size: 16px;
  --lz-popup-content-title-font-weight: 700;
  --lz-popup-content-title-color: #323233;
  --lz-popup-content-title-padding: 0;
```

