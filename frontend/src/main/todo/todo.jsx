import React, { Component } from "react";
import axios from "axios";
import Header from "../../template/pageHeader";
import Form from "../todo/todoform";
import Lista from "../todo/todolista";
const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", list: [] };
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.refresh();
  }
  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description));
  }

  handleSearch() {
    this.refresh(this.state.description);
  }
  refresh(description = "") {
    const search = description ? `&description__regex=/${description}/` : "";
    console.log(`${URL}?sort=-createdAt${search}`);
    axios.get(`${URL}?sort=-createdAt${search}`).then(resp =>
      description
        ? this.setState({
            ...this.state,
            description: description,
            list: resp.data
          })
        : this.setState({ ...this.state, description: "", list: resp.data })
    );
  }
  handleAdd() {
    const description = this.state.description;
    if (description != null) {
      axios.post(URL, { description }).then(resp => this.refresh());
    }
  }
  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description));
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
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          description={this.state.description}
          handleAdd={this.handleAdd}
        ></Form>
        <Lista
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        ></Lista>
      </div>
    );
  }
}
