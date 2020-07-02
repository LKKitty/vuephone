<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>8888</p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, namespace } from "vuex-class";
import HelloWorld from "./components/HelloWorld.vue";
import { TestModule } from "@/store/modules/test";
import store from "@/store";
const Test = namespace("test");

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  created() {
    // TestModule.puncture(4);
    console.log(TestModule.wheels);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $blue;
  margin-top: 60px;
  p {
    color: $light-blue;
  }
}
</style>
