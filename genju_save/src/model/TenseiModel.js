import ModelBase from './ModelBase'

/*
 * title: string 転生プランのタイトル
 */
export default class TenseiModel extends ModelBase {
  constructor() {
    super("tensei");
  }

  getTenseiList() {
    super.find({})
  }

  setTenseiTitle(title) {
    super.insert({
      title
    })
  }
}
