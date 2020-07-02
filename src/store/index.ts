import Vue from "vue";
import Vuex from "vuex";
import { testType } from "./modules/test";

Vue.use(Vuex);

export interface IRootState {
  test: testType;
}

export default new Vuex.Store<IRootState>({});
