<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('form')
})

</script>

## 基本使用

通过 `model` 传入表单数据，通过 `labelWidth` 控制左边 label 的宽度，通过 `rules` 传入验证规则

```vue
<template>
  <lz-form
    ref="formRef"
    :model="formInfo"
    :label-width="80"
    :rules="rules"
    card
    gap
  >
    <lz-form-item bg-color="#eee">
      <template #label>
        <div style="color: red;">表单标题</div>
      </template>
    </lz-form-item>
    <lz-form-item label="描述文本">
      <div>
        无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。
      </div>
    </lz-form-item>

    <lz-form-item label="无边框" prop="input1">
      <lz-input v-model="formInfo.input1" />
    </lz-form-item>
    <lz-form-item label="文本域" label-position="top" prop="textarea">
      <lz-input type="textarea" border v-model="formInfo.textarea" />
    </lz-form-item>
    <lz-form-item label="滑块" prop="test1">
      <lz-slider style="width: 100%;" v-model="formInfo.test1" />
    </lz-form-item>
    <lz-form-item label="输入框" prop="input">
      <lz-input border v-model="formInfo.input" />
    </lz-form-item>
    <lz-form-item label="开关" prop="test2">
      <lz-switch size="20" v-model="formInfo.test2" />
    </lz-form-item>
    <lz-form-item label="步进器" prop="test3">
      <lz-stepper v-model="formInfo.test3" />
    </lz-form-item>
    <lz-form-item label="评分" prop="test4">
      <lz-rate v-model="formInfo.test4" />
    </lz-form-item>
    <lz-form-item label="选择器" arrow clickable>
      <div @click="openPicker = true">
        {{ currentValue || "请选择地点" }}
      </div>
      <lz-picker
        v-model:show="openPicker"
        v-model="currentValue"
        title="地点选择"
        :list="list"
        key-name="value"
      />
    </lz-form-item>
    <lz-form-item label="单选框" prop="radioselect">
      <lz-radio-group v-model="formInfo.radioselect">
        <lz-radio label="test1" />
        <lz-radio label="test2" />
        <lz-radio label="test3" />
        <lz-radio label="test4" />
        <lz-radio label="test5" />
      </lz-radio-group>
    </lz-form-item>
    <lz-form-item label="多选框" prop="select">
      <lz-checkbox-group v-model="formInfo.select" shape="square">
        <lz-checkbox label="test1" />
        <lz-checkbox label="test2" />
        <lz-checkbox label="test3" />
        <lz-checkbox label="test4" />
        <lz-checkbox label="test5" />
      </lz-checkbox-group>
    </lz-form-item>
  </lz-form>
  <lz-button
    style="margin-top: 10px;padding: 0 10px;"
    type="success"
    block
    @click="submit"
  >
    提交
  </lz-button>
  <lz-button
    style="margin-top: 10px;padding: 0 10px;"
    type="primary"
    block
    @click="clear"
  >
    清空验证
  </lz-button>
  <lz-button
    style="margin-top: 10px;padding: 0 10px;"
    type="error"
    block
    @click="resetFields"
  >
    重置数据
  </lz-button>
</template>

<script setup>
import { reactive, ref } from "vue";

const formInfo = reactive({
  input: "11",
  input1: "222",
  textarea: "333",
  test1: 50,
  test2: false,
  test3: 5,
  test4: 3,
  radioselect: "test1",
  select: [],
});

const checkNum = (value) => {
  if (value.length >= 5 && value.length <= 14) {
    return true;
  } else {
    return false;
  }
};
const checkNum1 = (value) => {
  console.log("value", value);
  if (value >= 20 && value <= 70) {
    return true;
  } else {
    return false;
  }
};

const openPicker = ref(false);
const currentValue = ref();
const list = ref([
  { key: 1, value: "杭州" },
  { key: 2, value: "宁波" },
  { key: 3, value: "温州" },
  { key: 3, value: "肇庆" },
  { key: 3, value: "湖州" },
  { key: 3, value: "广州" },
]);

const rules = reactive({
  input: [
    {
      required: true,
      message: "此项必填！！！",
      trigger: "blur",
    },
    // 自定义校验
    {
      validator: checkNum,
      message: "请输入长度在5~14之间",
      trigger: "change",
    },
  ],
  textarea: [
    {
      required: true,
      message: "该项必填哦",
    },
  ],
  test1: [
    {
      validator: checkNum1,
      message: "选择范围在20-70之间",
      trigger: "change",
    },
  ],
});

const formRef = ref(null);
const submit = async () => {
  try {
    await formRef.value.validate();
    console.log("验证成功");
  } catch (error) {
    console.log("验证失败");
  }
};
const clear = () => {
  formRef.value.clearValidate();
};
const resetFields = () => {
  formRef.value.resetFields();
};
</script>
```

## form props

| 属性          |                     含义                      |  类型   | 默认值 |
| ------------- | :-------------------------------------------: | :-----: | -----: |
| rules         |                   验证规则                    | Object  |      - |
| labelPosition | 标题对齐方式,默认向左对齐,可选 top,right,left | String  | 'left' |
| labelWidth    |                  label 宽度                   | Number  |      - |
| card          |                是否为卡片风格                 | Boolean |  false |
| gap           |                 是否开启间距                  | Boolean |  false |

## form 实例所包含的方法，通过 ref 获取

| 方法名称      |   含义   |
| ------------- | :------: |
| validate      |   验证   |
| resetFields   | 重置数据 |
| clearValidate | 清除验证 |

## form-item props

| 属性           |      含义      |  类型   | 默认值 |
| -------------- | :------------: | :-----: | -----: |
| label          |    左侧名称    | String  |      - |
| labelPosition  |   label 位置   | String  |      - |
| arrow          |  是否显示箭头  | Boolean |  false |
| arrowDirection |    箭头方向    | String  |      - |
| clickable      | 是否有点击反馈 | Boolean |  false |
| prop           |   对应的字段   | String  |      - |
| required       |    是否必填    | Boolean |      - |
