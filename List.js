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
      // declare a variable to hold current list
      let currentList = [];
      // declare a variable to hold searched list
      let newList = [];

      // if the search box is not empty
      if (e.target.value != "") {
          // assign the original list to current list
          currentList = this.props.items;
          // filter out the searched item from the original list and assign to newList
          newList = currentList.filter(item => {
              // change the current item to lowercase
              const currItem = item.toLowerCase();
              // change the searched item to lowercase
              const filteredItem = e.target.value.toLowerCase();
              // check if the currItem contains the searched term. If yes, it will be added to newList
              return currItem.includes(filteredItem);
          });
      } else {
          // If the search bar is empty, set newList to the original list
          newList= this.props.items;
      }
      // Set the filtered state to what's returned by newList
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
