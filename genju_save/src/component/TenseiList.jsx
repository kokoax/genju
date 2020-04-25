import React from 'react';
import TenseiModel from '../model/TenseiModel';
import Typography from '@material-ui/core/Typography';

export default class TenseiList extends React.Component {
  constructor(props) {
    super(props);

    this.tenseiModel = new TenseiModel();
    // this.tenseiModel.setTenseiTitle("S極竜扇陽");
    // this.tenseiModel.setTenseiTitle("S極竜扇陽");
    console.log('YEAH');
    this.tenseiList = this.tenseiModel.getTenseiList();
  }

  render() {
    return (
      this.tenseiList.map((title) =>
        <Typography>{ title }</Typography>
      )
    );
  }
}
