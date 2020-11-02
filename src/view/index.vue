<template>
  <div class="">
    <p is-link @click="showPopup">展示弹出层</p>
    <p is-link @click="showPopup2">展示弹出层2</p>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Popup, Toast, Button } from "vant";
import { Picker } from "vant";
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Toast);
Vue.use(Button);
@Component
export default class extends Vue {
  show: boolean = false;
  columns: string[] = [
    "杭州",
    "宁波",
    "温州",
    "绍兴",
    "湖州",
    "嘉兴",
    "金华",
    "衢州",
    "湖州",
    "嘉兴",
    "金华",
    "衢州",
  ];
  showPopup() {
    this.show = true;
  }
  showPopup2() {
    this.show = true;
    this.columns = ["1", "2", "3", "4"];
  }
  onConfirm(value, index) {
    Toast(`当前值：${value}, 当前索引：${index}`);
  }
  onChange(picker, value, index) {
    Toast(`当前值：${value}, 当前索引：${index}`);
  }
  onCancel() {
    Toast("取消");
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
