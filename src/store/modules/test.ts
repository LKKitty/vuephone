import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from "vuex-module-decorators";
import store from "@/store";

export interface testType {
  wheels: number;
}
@Module({ dynamic: true, store, name: "test" })
export class Test extends VuexModule implements testType {
  public wheels = 2;
  get axles() {
    return this.wheels / 2;
  }
  @Mutation
  puncture(n: number) {
    this.wheels = this.wheels - n;
  }
  @Action
  async fetchNewWheels(wheelStore: number) {
    const wheels = wheelStore + 10;
    this.context.commit("addWheel", wheels);
  }
}

export const TestModule = getModule(Test);
