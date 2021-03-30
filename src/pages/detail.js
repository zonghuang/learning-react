import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    const match = this.props.match;
    console.log(match.params);
    return (
      <div>
        <p>Detail: {match.params.id}</p>
      </div>
    )
  }
}
