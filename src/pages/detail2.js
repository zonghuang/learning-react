import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    console.log(this.props.location);
    return (
      <div>
        <p>Detail2: {this.props.location.search}</p>
      </div>
    )
  }
}
