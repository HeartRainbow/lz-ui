<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('pagination')
})

</script>

## 基本使用

通过 `v-model` 绑定活跃的 `index` ，通过 `list` 传入需要显示的子项列表

```html
<lz-pagination v-model="activeIndex" @change="change" :total="100"/>
```

##  替换翻页按钮

通过 `prevText` 设置上一页，通过 `nextText` 设置下一页，也可以使用插槽 `prev` 自定义上一页，通过 `next` 自定义下一页

 ```html
<lz-pagination v-model="activeIndex"  prev-text="上一页" next-text="下一页" :total="100"/>
 ```


 ## props

| 属性          |         含义         |  类型  |    默认值 |
| ------------- | :------------------: | :----: | --------: |
| pageSize      |     每页显示条数     | Number |        10 |
| modelValue    |    双向绑定的页数    | Number |         1 |
| total         |         总数         | Number |         0 |
| prevText      |  替代图标上一页文字  | String |         - |
| nextText      |  替代图标下一页文字  | String |         - |
| disabledColor | 无法点击时的文字颜色 | String | '#bbbec4' |
| defaultColor  |     默认文字颜色     | String | '#606266' |

## events

| 事件名称 |    含义    |        参数 |
| -------- | :--------: | ----------: |
| change   | 页数改变时 | 当前的index |

## css变量

```css
  --lz-pagination-font-size: 14px;
  --lz-pagination-content-item-size: 34px;
  --lz-pagination-content-item-color: #606266;
  --lz-pagination-content-item-gap: 8px;
  --lz-pagination-content-item-border-radius: 2px;
  --lz-pagination-content-item-active-color: #ffffff;
  --lz-pagination-content-item-bg-color: #f0f2f5;
  --lz-pagination-content-item-acitve-bg-color: #409eff;
  --lz-pagination-disabled-color: #bbbec4;
  --lz-pagination-text-padding: 0 5px;
```