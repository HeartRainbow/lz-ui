<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('steps')
})

</script>

## 基本使用

通过 `v-model` 绑定活跃的 `index`

```html
<lz-steps v-model="active" @change="changeAc">
    <lz-steps-item>检查单信息</lz-steps-item>
    <lz-steps-item>整改信息</lz-steps-item>
    <lz-steps-item>复查信息</lz-steps-item>
    <lz-steps-item>处罚决定</lz-steps-item>
</lz-steps>
```

##  配置项

禁止点击，通过修改活跃值改变状态,将 `isAbleClick`  设置为false

修改活跃时颜色，通过 `activeColor` 设置。修改不活跃时颜色，通过 `inactiveColor` 设置


 ```html
<lz-steps
  :is-able-click="false"
  v-model="active1"
>
  <lz-steps-item>检查单信息</lz-steps-item>
  <lz-steps-item>整改信息</lz-steps-item>
  <lz-steps-item>复查信息</lz-steps-item>
  <lz-steps-item>处罚决定</lz-steps-item>
</lz-steps>
 ```

 ## 自定义图标

 通过插槽 `icon` 设置

 ```html
<lz-steps v-model="active2">
  <lz-steps-item title="检查单信息">
    <template #icon>
      <lz-icon
        size="16"
        :color="active2>=0?'#0078d4':'#666'"
        name="arrow-right"
      />
    </template>
  </lz-steps-item>
  <lz-steps-item title="整改信息">
    <template #icon>
      <lz-icon
        size="16"
        name="success"
        :color="active2>=1?'#0078d4':'#666'"
      />
    </template>
  </lz-steps-item>
  <lz-steps-item title="复查信息">
    <template #icon>
      <lz-icon
        size="16"
        name="love-fill"
        :color="active2>=2?'#0078d4':'#666'"
      />
    </template>
  </lz-steps-item>
  <lz-steps-item title="处罚决定">
    <template #icon>
      <lz-icon
        size="16"
        name="star-fill"
        :color="active2>=3?'#0078d4':'#666'"
      />
    </template>
  </lz-steps-item>
</lz-steps>
 ```


 ## steps props

| 属性          |      含义       |  类型   |    默认值 |
| ------------- | :-------------: | :-----: | --------: |
| modelValue    | 当前活跃的index | Number  |         0 |
| isAbleClick   |   是否可点击    | Boolean |      true |
| activeColor   |   活跃时颜色    | String  | '#0078d4' |
| inactiveColor |  不活跃时颜色   | String  | '#999999' |



 ## steps-item props

| 属性  |   含义   |  类型  | 默认值 |
| ----- | :------: | :----: | -----: |
| title | 子项名称 | String |      - |

## steps events

| 事件名称 |      含义       |        参数 |
| -------- | :-------------: | ----------: |
| change   | 活跃index改变时 | 当前的index |

## steps css变量

```css
  --lz-steps-padding: 10px;
  --lz-steps-bg-color: #ffffff;
```

## steps-items css变量

```css
  --lz-steps-item-font-size: 12px;
  --lz-steps-item-transition-time: 0.3s;
  --lz-steps-item-icon-default-size: 9px;
  --lz-steps-item-icon-default-border-size: 2px;
  --lz-steps-item-text-padding-top: 20px;
  --lz-steps-item-line-bg-color: #ebedf0;
  --lz-steps-item-line-height: 1px;
```