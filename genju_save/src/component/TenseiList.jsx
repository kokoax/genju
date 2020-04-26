import React from 'react';
import Typography from '@material-ui/core/Typography';

import TenseiModel from '../model/TenseiModel';

export default class TenseiList extends React.Component {
  constructor() {
    super();

    this.state = {
      tenseiList: [],
      tenseiModel: new TenseiModel()
    };
  }

  componentDidMount() {
    this.state.tenseiModel.getTenseiList()
      .then((tenseiList) => {
        this.setState({
          ...this.state,
          'tenseiList': tenseiList
        })
      });
  }

  render() {
    return (
      this.state.tenseiList.map((item) =>
        <Typography key={ item._id }>{ item.title }</Typography>
      )
    );
  }
}
