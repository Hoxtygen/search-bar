import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
import List from './List';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'Make some cappucchino for lunch',
                'Go to the market to get some groceries',
                'Make some cool animation stuffs',
                'Go to the cinema to see new movie'
            ]
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        let list =  this.state.list;
        const newItem = document.getElementById('addInput');
        const form = document.getElementById('addItemForm');

        if (newItem.value !== "") {
            list.push(newItem.value);
            this.setState({list:list});
            newItem.classList.remove("is-danger");
            form.reset();
        } else {
            newItem.classList.add("is-danger");
        }
    }

    removeItem(item) {
        const list = this.state.list.slice();
        list.some((el, index) => {
            if (el === item) {
                list.splice(index, 1);
                return true
            }
        });
        this.setState({list:list})
    }


    render() {
        const list = this.state.list;
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                    <List items={this.state.list} delete={this.removeItem} />
                    </section>
                </div>
                <section className="section">
                    <form action="" className="form is-info" id="addItemForm">
                    <input 
                        type="text" 
                        className="input" 
                        id="addInput"
                        placeholder = 'input field'
                    />
                    <button className="button is-info" onClick = {this.addItem}>Add Item</button>
                    </form>
                </section>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))