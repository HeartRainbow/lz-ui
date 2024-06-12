<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('checkbox')
})

</script>

## 基本使用

通过 `v-model` 进行双向绑定,通过 `label` 指定显示内容，也可以通过默认插槽进行自定义

```html
<lz-checkbox v-model="test1" label="数据1"/>
```

## 自定义形状

通过 `shape` 设置，可选值为 `square` 、 `round`

 ```html
<lz-checkbox
  v-model="test2"
  label="test2"
  shape="square"
/>
 ```

## 禁用状态

通过 `disabled` 设置

 ```html
<lz-checkbox
  v-model="test2"
  disabled
  label="单选框"
/>
 ```

## 自定义选中背景色

通过 `checkedColor` 设置

 ```html
<lz-checkbox
  v-model="test2"
  checked-color="red"
>
  单选框
</lz-checkbox>
 ``` 

## 文本位置

通过 `labelPosition` 设置，可选值为 `left` 、 `right`，默认 `right`

 ```html
<lz-checkbox
  v-model="test2"
  label="单选框"
  shape="square"
  label-position="left"
/>
 ``` 

## 是否两边排布

通过 `spaceBetween` 开启

 ```html
<lz-checkbox
  v-model="test3"
  label="单选框"
  space-between
  label-position="left"
/>
 ```
## 多选组

通过 `lz-checkbox-group` 组件包裹,通过 `v-model` 绑定数组类型数据

 ```html
<lz-checkbox-group v-model="checkArr">
  <lz-checkbox
    label="test1"
  />
  <lz-checkbox
    label="test2"
  />
  <lz-checkbox
    label="test3"
  />
  <lz-checkbox
    label="test4"
  />
  <lz-checkbox
    label="test41"
  />
  <lz-checkbox
    label="test42"
  />
  <lz-checkbox
    label="test43"
  />
</lz-checkbox-group>
 ``` 

## 限制最大选择数量

通过 `max` 属性设置

```html
<lz-checkbox-group v-model="checkArr1" :max="2">
  <lz-checkbox
    label="test1"
  />
  <lz-checkbox
    label="test2"
  />
  <lz-checkbox
    label="test3"
  />
  <lz-checkbox
    label="test4"
  />
</lz-checkbox-group>
````

## checkbox props

| 属性          |              含义              |  类型   |  默认值 |
| ------------- | :----------------------------: | :-----: | ------: |
| modelValue    |          双向绑定的值          | Boolean |   false |
| shape         | 选项形状，可选'round','square' | String  | 'round' |
| label         |             标签名             | String  |       - |
| disabled      |            是否禁用            | Boolean |   false |
| checkedColor  |           选择的颜色           | String  |       - |
| labelPosition | 标签名位置，可选'left','right' | String  | 'right' |
| spaceBetween  |          是否两边排布          | Boolean |   false |

## checkbox-group props

| 属性         |                 含义                 |       类型       |    默认值 |
| ------------ | :----------------------------------: | :--------------: | --------: |
| modelValue   |             双向绑定的值             |      Array       |        [] |
| max          |             最大选中个数             |      Number      |         - |
| direction    | 排布规则，可选'column'纵向,'row'横向 |      String      |     'row' |
| iconSize     |               图标大小               | [Number, String] |        18 |
| checkedColor |            选中的背景颜色            |      String      | '#1989fa' |
| shape        |    选项形状，可选'round','square'    |      String      |   'round' |

## checkbox events

| 事件名称 |    含义    |     参数 |
| -------- | :--------: | -------: |
| change   | 选项改变时 | 当前的值 |

## checkbox-group events

| 事件名称 |    含义    |           参数 |
| -------- | :--------: | -------------: |
| change   | 选项改变时 | 当前选择的数组 |

## checkbox css变量

```css
    --lz-check-box-icon-border: 1px solid #c8c9cc;
    --lz-check-box-icon-active-border: 1px solid #1989fa;
    --lz-check-box-icon-active-bg-color: #1989fa;
    --lz-check-box-icon-disabled-border: 1px solid #c8c9cc;
    --lz-check-box-icon-disabled-bg-color: #ebedf0;
    --lz-check-box-text-margin: 8px;
    --lz-check-box-text-size: 14px;
    --lz-check-box-space-between-padding: 0 10px;
```

## checkbox-group css变量

```css
    --lz-checkbox-group-gap: 10px;
```