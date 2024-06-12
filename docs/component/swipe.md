<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('swipe')
})

</script>

## 基本使用

```html
<lz-swipe>
  <lz-swipe-item>
    <div class="test color1">
      1
    </div>
  </lz-swipe-item>
  <lz-swipe-item>
    <div class="test color2">
      2
    </div>
  </lz-swipe-item>
  <lz-swipe-item>
    <div class="test color3">
      3
    </div>
  </lz-swipe-item>
</lz-swipe>
```


 ## props

| 属性     |     含义     |  类型  | 默认值 |
| -------- | :----------: | :----: | -----: |
| pageSize | 每页显示条数 | Number |     10 |

## events

| 事件名称 |    含义    |        参数 |
| -------- | :--------: | ----------: |
| change   | 页数改变时 | 当前的index |

## css变量

```css
```