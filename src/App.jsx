import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import defaultTasks from "./DefaultTasks";
import Todos from "./components/Todos";

function App() {
  const [totalTasks, setTasks] = useState(defaultTasks);

  function addTask(task) {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Header
        addTask={addTask}
        title="Task Tracker App"
        titleColor="white"
        buttonColor="Green"
      />
      <Todos deleteTask={deleteTask} totalTasks={totalTasks} />
      <Footer />
    </div>
  );
}

export default App;
