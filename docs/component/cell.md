<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('cell')
})

</script>

## 点击反馈

通过`clickable` 属性开启

```html
<lz-cell clickable title="test" value="内容"/>
```

## 卡片式

通过使用`lz-cell-group` 组件包裹，并传入`card`属性即可,两边需要间隙可以开启`gap`属性

```html
<lz-cell-group card gap>
  <lz-cell title="test" value="内容"/>
  <lz-cell
    title="test"
    value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
  />
</lz-cell-group>
```

## 字体大小

通过`size` 设置

```html
<lz-cell size="16" title="test" value="内容"/>
```

## 添加图标

通过`icon` 设置

```html
<lz-cell icon="add" icon-color="#4fc0a7" size="16" title="test" value="内容"/>
```

## 显示箭头

通过`arrow` 设置,默认右边，通过`down`设置为下边

```html
<lz-cell-group card>
  <lz-cell
    arrow
    title="test"
    value="内容"
  />
  <lz-cell
    arrow
    arrow-direction="down"
    title="test"
    value="内容"
  />
</lz-cell-group>
```

## 使用插槽

`title`设置左边的标题插槽，`value`设置右边内容插槽

```html
<lz-cell>
  <template #title>
    自定义title
  </template>
  <template #value>
    自定义value
  </template>
</lz-cell>
```
## props

| 属性           |      含义      |          类型           |  默认值 |
| -------------- | :------------: | :---------------------: | ------: |
| title          |      标题      |         String          | default |
| value          |    右边的值    | [String,Number,Boolean] |       - |
| bgColor        |    背景颜色    |         String          |  '#fff' |
| size           |    字体大小    |     [String,Number]     |    '14' |
| icon           |    图标名称    |         String          |       - |
| iconColor      |    图标颜色    |         String          |       - |
| iconSize       |    图标大小    |         Number          |      16 |
| arrow          |  是否显示箭头  |         Boolean         |   false |
| arrowDirection |    箭头位置    |         String          | 'right' |
| clickable      |    点击反馈    |         Boolean         |   false |
| labelWidth     |   标题的宽度   |         Number          |       - |
| labelPosition  | 标题的对齐方式 |         String          |  'left' |

## events

| 事件名称 |   含义   | 参数 |
| -------- | :------: | ---: |
| click    | 点击事件 |    - |

## css变量

```css
  --lz-cell-after-right: 15px;
  --lz-cell-after-left: 15px;
  --lz-cell-after-border-bottom: 1px solid #f5f6f7;
  --lz-cell-clickable-bg-color: #f2f3f5;
  --lz-cell-content-padding: 10px 16px;
  --lz-cell-content-title-margin-right: 20px;
  --lz-cell-content-value-color: #969799;
  --lz-cell-content-value-slot-text-align: right;
  --lz-cell-content-justify-content: space-between;
  --lz-cell-tips-color: #ee0a24;
  --lz-cell-tips-font-size: 13px;
```
