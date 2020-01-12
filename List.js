import React, { Component } from "react";

export default class List extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item}>
              {item} &nbsp;
              <span
                className="delete"
                onClick={() => this.props.delete(item)}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
