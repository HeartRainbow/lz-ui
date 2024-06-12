<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('overlay')
})

</script>

## 基本使用

通过 `show` 控制显示和隐藏，通过 `zIndex` 控制显示的层级

```html
<lz-overlay
  :show="show"
  z-index="2"
  @click="show = false"
/>
```

##  嵌入内容

通过默认插槽进行插入内容

 ```html
<lz-overlay
  :show="show1"
  @click="show1 = false"
>
  <div class="wrapper">
    <div class="block">
      test
    </div>
  </div>
</lz-overlay>
 ```


 ## props

| 属性    |     含义     |  类型   | 默认值 |
| ------- | :----------: | :-----: | -----: |
| show    | 是否显示遮罩 | Boolean |  false |
| zIndex  |     层级     | String  |    '1' |
| overlay | 显示遮罩背景 | Boolean |   true |



## css变量

```css
  --lz-overlay-transition-time: 0.5s;
```