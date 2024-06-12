<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('num-input')
})

</script>

## 是否显示数字键盘

通过 `v-model:show` 进行绑定显示还是隐藏,通过 `v-model` 进行双向绑定

```html
<lz-num-input v-model:show="show"/>
```

##  限制最大长度

通过 `maxlength` 设置

 ```html
<lz-num-input
  v-model:show="show2"
  v-model="value1"
  :maxlength="6"
/>
 ```

##   替换最后一个按键

通过 `extraKey`  替换,可用作身份证键盘

 ```html
<lz-num-input
  v-model:show="show3"
  v-model="value2"
  extra-key="x"
/>
 ```

##   替换键盘内容

通过 `diyArr` 替换默认数字键盘

 ```html
<lz-num-input
  v-model:show="show4"
  v-model="value3"
  :diy-arr="['东', '西', '南', '北', '中', '发', '白', '一', '二', '三' ]"
/>
 ```

## props

| 属性       |        含义        |  类型   | 默认值 |
| ---------- | :----------------: | :-----: | -----: |
| show       |  双向绑定是否显示  | Boolean |  false |
| modelValue |    双向绑定的值    | String  |      - |
| maxlength  |    限制最大数量    | Number  |     -1 |
| extraKey   | 自定义最后一个按键 | String  |      - |
| diyArr     | 自定义整个键盘内容 |  Array  |      - |

## events

| 事件名称 |     含义     |       参数 |
| -------- | :----------: | ---------: |
| change   | 绑定值改变时 | 当前的子项 |

## css变量

```css
  --lz-num-input-font-size: 22px;
  --lz-num-input-border-radius: 8px;
  --lz-num-input-color: #323233;
  --lz-num-input-bg-color: #ffffff;
  --lz-num-input-active-bg-color: #ebedf0;
  --lz-num-input-confim-color: #ffffff;
  --lz-num-input-confim-bg-color: #1989fa;
```