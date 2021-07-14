import React from "react";

const Todo = (props) => {
  return (
    <div className="task">
      <h3>{props.text}</h3>
      <p>{props.day}</p>
    </div>
  );
};

export default Todo;
