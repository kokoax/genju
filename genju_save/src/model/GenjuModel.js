import * as ModelBase from './ModelBase'

/*
 * genju_name: string 幻獣の名前
 * henge_name: string 変化アイテムの名前
 * price: numeric 変化アイテムの価格
 */
export default class GenjuModel extends ModelBase {
  constructor() {
    super("genju");
  }

  setGenju(genju_name, henge_name, price) {
    this.insert({
      genju_name,
      henge_name,
      price,
    })
  }
}
