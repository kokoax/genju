import * as ModelBase from './ModelBase'

/*
 * tensei_id: string tensei_modelのid
 * tensei_num: numeric 何転目かを入力
 */
export default class TenseiPlanModel extends ModelBase {
  constructor() {
    super("tensei_plan");
  }

  getTenseiPlanByTenseiId(tenseiId) {
     return super.find({ tenseiId });
  }

  setTenseiPlan(tensei_id, tensei_num) {
    return super.insert({
      tensei_id,
      tensei_num,
    })
  }
}
