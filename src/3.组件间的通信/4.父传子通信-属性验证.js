import React, { Component } from "react";
import PropTypes from "prop-types";

function ChildCpn(props) {
  const { name, age } = props;
  console.log(name, age);
  const { names } = props;

  return (
    <div>
      <h2>{name + age}</h2>
      <ul>
        {names.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

class ChildCpn2 extends Component {
  // es6中的class fields写法
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    names: PropTypes.array,
  }

  static defaultProps = {
    name: "why",
    age: 30,
    names: ["aaa", "bbb"],
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { name, age } = this.props;
    console.log(name, age);
    const { names } = this.props;
    return (
      <div>
        <h2>{name + age}</h2>
        <ul>
          {names.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    )
  }
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  names: PropTypes.array,
};

ChildCpn.defaultProps = {
  name: "why",
  age: 30,
  names: ["aaa", "bbb"],
};

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="zonghuang" age={18} names={["li", "zonghuang"]} />
        <ChildCpn2 name="Kobe" age={40} name={["aaa", "bbb"]} />
        <ChildCpn2 />
      </div>
    );
  }
}
