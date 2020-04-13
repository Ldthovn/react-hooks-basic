// rafce
import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array, //pta: tao  ra PropTypes.array
  onTodoClick: PropTypes.func, //ptf: tao ra PropTypes
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

export default TodoList;
