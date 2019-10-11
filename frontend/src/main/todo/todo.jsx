import React, { Component } from "react";
import Header from "../../template/pageHeader";
import Form from "../todo/todoform";
import Lista from "../todo/todolista";
export default class Todo extends Component {
  render() {
    return (
      <div>
        <Header name="Tarefas" small="Cadastro"></Header>
        <Form></Form>
        <Lista></Lista>
      </div>
    );
  }
}
