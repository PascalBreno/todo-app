import React, { Component } from "react";
import Header from "../../template/pageHeader";
import Form from "../todo/todoform";
import Lista from "../todo/todolista";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    console.log(this.state.description);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <Header name="Tarefas" small="Cadastro"></Header>
        <Form
          handleChange={this.handleChange}
          description={this.state.description}
          handleAdd={this.handleAdd}
        ></Form>
        <Lista></Lista>
      </div>
    );
  }
}
