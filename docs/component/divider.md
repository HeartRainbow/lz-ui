<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('divider')
})

</script>

## 基本使用

```html
<lz-divider>标题</lz-divider>
```

##  使用 0.5px 线

通过 `hairline` 设置

```html
<lz-divider hairline>标题</lz-divider>
```

##  开启虚线

通过 `dashed` 设置

 ```html
<lz-divider dashed>标题</lz-divider>
 ```

##  内容位置

通过 `position` 设置left或者right值

 ```html
<lz-divider position="left">标题</lz-divider>

<lz-divider position="right">标题</lz-divider>
 ```


## props

| 属性     |         含义          |  类型   | 默认值 |
| -------- | :-------------------: | :-----: | -----: |
| hairline |        0.5px线        | Boolean |  false |
| dashed   |         虚线          | Boolean |  false |
| position | 位置，left和right可选 | String  |      - |

## events
无

## css变量
```css
  --lz-divider-margin: 16px 0;
  --lz-divider-font-size: 14px;
  --lz-divider-border-color: #ebedf0;
  --lz-divider-color: #969799;
  --lz-divider-line-height: 1px;
  --lz-divider-content-distance: 10px;
  --lz-divider-left-line-max-width: 10%;
  --lz-divider-right-line-max-width: 10%;
```