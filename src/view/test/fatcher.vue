//父组件
<template>
  <div>
    <childDom :hasThis="hasThis" :noThis="noThis"> </childDom>
    <baseInput v-on:focus="onFocus"></baseInput>
  </div>
</template>
<script>
import childDom from "./sonDom.vue";
import baseInput from "./baseInput.vue";
export default {
  data() {
    return {
      hasThis: "Hello,world",
      noThis: "Hello,rui",
    };
  },
  components: { childDom, baseInput },
  methods: {
    onFocus(e) {
      console.log(e, 444);
    },
  },
};
</script>
