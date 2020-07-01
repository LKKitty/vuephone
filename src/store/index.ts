import Vue from "vue";
import Vuex from "vuex";
import { TestModule } from "./modules/test";

Vue.use(Vuex);

export interface IRootState {
  test: TestModule;
}

export default new Vuex.Store<IRootState>({});
