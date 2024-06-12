<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('count-to')
})

</script>

## 配置设置

通过 `start` 设置开始的数字,通过end 设置结束数字,通过 `autoPlay` 是否自动播放,通过 `duration` 持续时间,通过 `prefix` 设置字体前置符号,通过 `suffix` 设置字体后置符号,通过 `useEasing` 设置滚动结束后是否开启拖尾,通过 `separator` 设置千分位分隔符

```html
<lz-count-to
  :start="0"
  :end="endCount"
  :auto-play="true"
  :duration="2000"
  prefix="￥"
  suffix="RMB"
  font-size="30px"
  color="#f56c6c"
/>
```

##  字体属性

通过 `prevText` 设置上一页，通过 `nextText` 设置下一页，也可以使用插槽 `prev` 自定义上一页，通过 `next` 自定义下一页

 ```html
<lz-count-to
  :start="0"
  :end="endCount"
  :auto-play="true"
  :duration="2000"
  font-size="30px"
  color="#f56c6c"
  bold
/>
 ```


 ## props

| 属性      |           含义           |   类型   |                                                         默认值 |
| --------- | :----------------------: | :------: | -------------------------------------------------------------: |
| start     |         开始数字         |  Number  |                                                              0 |
| end       |         结束数字         |  Number  |                                                              0 |
| duration  |       动画持续时间       |  Number  |                                                           5000 |
| autoPlay  |       是否自动播放       | Boolean  |                                                           true |
| decimals  |     要显示的小数位数     |  Number  |                                                              0 |
| decimal   |        十进制分割        |  String  |                                                            '.' |
| separator |       千分位分隔符       |  String  |                                                            ',' |
| prefix    |         前缀符号         |  String  |                                                              - |
| suffix    |         后缀符号         |  String  |                                                              - |
| useEasing | 滚动结束时，是否缓动结尾 | Boolean  |                                                           true |
| easingFn  |                          | Function | (return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b) |
| fontSize  |         字体大小         |  String  |                                                                |
| bold      |       字体是否加粗       | Boolean  |                                                          false |
| color     |         字体颜色         |  String  |                                                              - |

## events

| 事件名称          |       含义        | 参数 |
| ----------------- | :---------------: | ---: |
| onMountedcallback | dom挂在完成后执行 |    - |
| callback          | 动画结束后的回调  |    - |

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