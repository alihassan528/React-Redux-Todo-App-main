import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};
const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      <div
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </div>
      <br />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
