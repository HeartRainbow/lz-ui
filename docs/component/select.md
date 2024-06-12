<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('select')
})

</script>

## 基本使用

通过 `v-model` 绑定选中的值，通过 `list` 绑定渲染列表，通过 `keyName` 绑定显示的字段

```html
<lz-select
  :list="list"
  key-name="name"
  placeholder="请选择"
  v-model="test1"
/>
```

##  是否可搜索

通过 `filterable` 开启

 ```html
<lz-select
  v-model="test2"
  placeholder="请选择"
  item-bg-color="#f5f7fa"
  :list="list"
  key-name="name"
  filterable
/>
 ```

##  空数据

可以使用插槽自定义内容,通过 `empty` 名称插槽自定义

 ```html
<lz-select
  v-model="test2"
  placeholder="请选择"
>
  <template #empty>
    <div style="padding: 10px;font-size: 14px;">
      测试空数据
    </div>
  </template>
</lz-select>
 ```

##  开启多选

通过 `multiple` 开启

 ```html
<lz-select
  :list="list"
  key-name="name"
  v-model="test3"
  multiple
  placeholder="请选择"
/>
 ```

 ## props

| 属性        |      含义      |          类型           | 默认值 |
| ----------- | :------------: | :---------------------: | -----: |
| modelValue  |  双向绑定的值  | [String, Array, Number] |      1 |
| placeholder |  默认显示的值  |         String          |      - |
| filterable  |     可筛选     |         Boolean         |  false |
| multiple    |     可多选     |         Boolean         |  false |
| list        |   渲染的列表   |          Array          |      - |
| keyName     | 子项显示的字段 |         String          |      - |
| itemBgColor |  子项背景颜色  |         String          |      - |

## events

| 事件名称 |    含义    | 参数 |
| -------- | :--------: | ---: |
| change   | 选项改变时 |    - |

## css变量

```css
  --lz-select-height: 36px;
  --lz-select-width: 200px;
  --lz-select-border: 1px solid #dcdfe6;
  --lz-select-bg-color: #ffffff;
  --lz-select-border-radius: 4px;
  --lz-select-padding: 0 10px 0 0;
  --lz-select-active-border: 1px solid #409eff;
  --lz-select-placeholder-color: #d3c9d6;
  --lz-select-placeholder-font-size: 14px;
  --lz-select-multiple-item-bg-color: #f0f2f5;
  --lz-select-multiple-item-color: #909399;
  --lz-select-input-color: #606266;
  --lz-select-input-font-size: 14px;
  --lz-select-box-box-shadow: 0 0 12px rgb(0 0 0 / 12%);
  --lz-select-box-bg-color: #ffffff;
  --lz-select-box-border-radius: 4px;
  --lz-select-box-height: 150px;
  --lz-select-box-z-index: 999;
  --lz-select-box-content-padding-top: 10px;
  --lz-select-box-item-margin-bottom: 10px;
  --lz-select-box-item-padding: 10px 20px;
  --lz-select-box-item-font-size: 14px;
  --lz-select-box-item-color: #606266;
  --lz-select-box-item-select-color: #409eff;
  --lz-select-box-item-select-font-weight: 700;
  --lz-select-box-content-empty-default-color: #606266;
  --lz-select-box-content-empty-default-font-size: 14px;
```