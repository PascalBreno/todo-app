const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);
Todo.updateOptions({ news: true, runValidators: true });

module.exports = Todo;
