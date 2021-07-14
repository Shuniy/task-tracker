import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div>
      {props.totalTasks.map((Task, index) => {
        return (
          <Todo
            key={index}
            text={Task.text}
            day={Task.day}
            reminder={Task.reminder}
            id={Task.id}
          />
        );
      })}
    </div>
  );
}

export default Todos;
