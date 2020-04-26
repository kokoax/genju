import ModelBase from './ModelBase'

/*
 * title: string 転生プランのタイトル
 */
export default class TenseiModel extends ModelBase {
  constructor() {
    super("tensei");
  }

  getTenseiList() {
    return super.find({})
  }

  setTenseiTitle(title) {
    return super.insert({
      title
    })
  }
}
