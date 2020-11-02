<template>
  <div>
    <p>hasThis:{{ hasThis }}</p>
  </div>
</template>
<script>
export default {
  name: "son-dom",
  props: ["hasThis", "noThis"],
  created() {
    console.log(this.$attrs);
  },
};
</script>
