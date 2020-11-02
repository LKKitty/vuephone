<template>
  <div id="app">
    <!-- <v-stage :config="configKonva">
      <v-layer v-for="(i, index) in circles" :key="index">
        <v-rect :config="i"></v-rect>
      </v-layer>
    </v-stage> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, namespace } from "vuex-class";
import HelloWorld from "./components/HelloWorld.vue";
import Fatcher from "./view/test/fatcher.vue";
import { TestModule } from "@/store/modules/test";
import store from "@/store";
const Test = namespace("test");

@Component({
  components: {
    HelloWorld,
    Fatcher,
  },
})
export default class App extends Vue {
  configKonva: any = {
    width: 800,
    height: 500,
  };

  circles: any[] = [
    {
      x: 100,
      y: 100,
      width: 100,
      height: 200,
      fill: "green",
      stroke: "black",
      strokeWidth: 4,
      draggable: true,
      dragBoundFunc: function (pos) {
        var newY = pos.y < 0 ? 0 : pos.y >= 200 ? 300 : pos.y;
        var newX = pos.x < 0 ? 0 : pos.x;
        return {
          x: newX,
          y: newY,
        };
      },
    },
    {
      x: 100,
      y: 150,
      width: 100,
      height: 200,
      fill: "blue",
      stroke: "black",
      strokeWidth: 4,
      draggable: true,
    },
  ];
  created() {}
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $blue;
  overflow: hidden;
  img {
    margin-top: 60px;
  }
  p {
    color: $light-blue;
  }
}
</style>
