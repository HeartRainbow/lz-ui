<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('message')
})

</script>

```vue
<template>
  <div class="container">
    <lz-button @click="showMessage">
      点击显示
    </lz-button>
  </div>
</template>

<script setup>

import { Message } from '../../../index'
const showMessage = () => {
  Message({
    content: 'test'
  })
}
</script>

```

## props

| 属性     |   含义   |  类型  | 默认值 |
| -------- | :------: | :----: | -----: |
| content  | 消息文字 | String |      - |
| duration | 持续时间 | Number |   3000 |


## css变量

```css
  --lz-message-value-top: 30px;
  --lz-message-value-padding: 8px 10px;
  --lz-message-value-width: 70%;
  --lz-message-value-height: 40px;
  --lz-message-value-border-radius: 4px;
  --lz-message-value-bg-color: #ffffff;
  --lz-message-value-box-shadow: 0 4px 12px #00000026;
  --lz-message-animation-time: 0.5s;
  --lz-message-animation-remove-time: 0.6s;
```