import React, {Component} from 'react';
export default class FirstComponent extends Component {
constructor(props) {
    super(props)
  }
render() {
    const element = (<div>This is my first component</div>)
    return (<div className="comptext">
    <h3>Hello World!</h3>
      {this.props.displaytext}
      {element}
    </div>)
  }
}