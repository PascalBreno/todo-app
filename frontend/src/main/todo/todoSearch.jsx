import React from "react";
import Grid from "../../template/grid";
import IconButton from "../../template/iconButton";
export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10 10">
      <input
        id="Search"
        className="form-control"
        placeholder="Pesquise uma tarefa"
        onChange={props.handleSearch}
        value={props.description}
      ></input>
    </Grid>
    <Grid cols="12 3 2 2">
      <IconButton icon="search" hide={true}></IconButton>
    </Grid>
  </div>
);
