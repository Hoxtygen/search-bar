import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ filtered: this.props.items });
  }

  UNSAFE_componentWillReceiveProps(nextprops) {
    this.setState({ filtered: nextprops.items });
  }

  handleChange(e) {
      let currentList = [];
      let newList = [];

      if (e.target.value != "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
              const lcItem = item.toLowerCase();
              const filter = e.target.value.toLowerCase();
              return lcItem.includes(filter);
          });
      } else {
          // If the search bar is empty, set newList to original task list
          newList= this.props.items;
      }
      // Set the filtered state based on what our rules added to newList
      this.setState({filtered: newList});
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" className="input" placeholder="Search..." onChange = {this.handleChange}/>
          <ul>

          </ul>
        </div>
        <ul>
          {this.state.filtered.map(item => (
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
