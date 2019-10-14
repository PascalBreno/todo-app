import React from "react";
import Grid from "../../template/grid";
import IconButton from "../../template/iconButton";
export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10 10">
      <input
        id="description"
        className="form-control"
        placeholder="adiciona uma tarefa"
        onChange={props.handleChange}
        value={props.description}
      ></input>
    </Grid>
    <Grid cols="12 3 2 2">
      <IconButton
        btn="primary"
        icon="plus"
        hide={false}
        onClick={props.handleAdd}
      ></IconButton>
    </Grid>
  </div>
);
