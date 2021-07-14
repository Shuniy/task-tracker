import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import defaultTasks from "./DefaultTasks";
import Todos from "./components/Todos";

function App() {
  const [totalTasks, setTasks] = useState(defaultTasks);

  function addTask(task) {
    setTasks((prevTasks) => {
      return [
        {
          id: task.id,
          text: task.Text,
          day: task.dayResult,
          reminder: task.Reminder,
        },
        ...prevTasks,
      ];
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => {
        return task.id !== id;
      });
    });
  }

  function toggleReminder(id) {
    setTasks(
      totalTasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  }

  return (
    <div className="container">
      <Header
        addTask={addTask}
        title="Task Tracker App"
        titleColor="white"
        buttonColor="Green"
      />
      {totalTasks.length ? (
        <Todos
          deleteTask={deleteTask}
          totalTasks={totalTasks}
          toggleReminder={toggleReminder}
        />
      ) : (
        <strong>
          <p style={{ textAlign: "center" }}>Nothing Here, Try Adding Some !</p>
        </strong>
      )}
      <Footer />
    </div>
  );
}

export default App;
