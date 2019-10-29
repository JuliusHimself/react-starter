import React from 'react';

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
      <p>
        {this.state.content}
      </p>
    )
  }
}