<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('stepper')
})

</script>

## 基本使用

```html
<lz-stepper :min="-5" v-model="value" />
```

## 限制为整数

通过 `integer` 设置

```html
<lz-stepper integer v-model="value11" />
```

## 禁止输入框输入

通过 `disable-input` 设置

```html
<lz-stepper disable-input v-model="value22" />
```

## 修改步长，每次+-3

通过 `step` 设置

```html
<lz-stepper :step="3" v-model="value2" />
```

## 修改尺寸

通过 `size` 设置

```html
<lz-stepper :size="34" input-width="40px" v-model="value2" />
```

## 限制输入范围(-1,5)

通过 `min` 和 `max` 设置

```html
<lz-stepper :min="-1" :max="5" v-model="value1" />
```

## 显示可清除图标

通过 `clearable` 设置

```html
<lz-search v-model="value" clearable />
```

## props

| 属性         |        含义        |  类型   | 默认值 |
| ------------ | :----------------: | :-----: | -----: |
| modelValue   |   双向绑定的数字   | Number  |      - |
| max          |       最大值       | Number  |      - |
| min          |       最小值       | Number  |      1 |
| min          |       最小值       | Number  |      1 |
| integer      |   只允许输入整数   | Boolean |  false |
| disabled     |      是否禁用      | Boolean |  false |
| disableInput | 是否禁止输入框输入 | Boolean |  false |
| inputWidth   |    输入框的宽度    | String  | '28px' |
| size         |     步进器大小     | Number  |     28 |

## events

| 事件名称 |   含义   |         参数 |
| -------- | :------: | -----------: |
| add      | 点击+时  |            - |
| sub      | 点击-时  |            - |
| change   | 值改变时 | 当前绑定的值 |

## css 变量

```css
--lz-stepper-gap: 2px;
--lz-stepper-input-color: #323233;
--lz-stepper-bg-color: #f2f3f5;
--lz-stepper-active-bg-color: #f7f8f9;
--lz-stepper-disabled-bg-color: #f7f8fa;
--lz-stepper-border-radius: 4px;
```
