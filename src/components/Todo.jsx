import React from "react";
import { FaTimes } from "react-icons/fa";

const Todo = (props) => {
  function handleDelete() {
    props.deleteTask(props.id);
  }

  function handleDoubleClick() {
    props.toggleReminder(props.id);
  }

  return (
    <div
      className={`task ${props.reminder ? "reminder" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      <h3>
        {props.text} <FaTimes onClick={handleDelete} />
      </h3>

      <p>{props.day}</p>
    </div>
  );
};

export default Todo;
