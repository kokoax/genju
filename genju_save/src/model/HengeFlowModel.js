import * as ModelBase from './ModelBase'

/*
 * tensei_plan_id: string teise_plan_modelのid
 * genju_id: string genju_modelのid
 * flow_num: numeric 何番めの変化かを入力
 */
export default class HengeFlowModel extends ModelBase {
  constructor() {
    super("henge_flow");
  }

  setTenseiFlow(tensei_plan_id, genju_id, flow_num) {
    this.insert({
      tensei_plan_id,
      genju_id,
      flow_num,
    })
  }
}
