import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Loading'
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <CircularProgress />
    )
  }
}
