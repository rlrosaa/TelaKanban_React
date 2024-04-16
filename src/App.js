import React, { useState } from "react";
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import TaskList from "./Components/TaskList/TaskList";

let idAcc = 1;
const generateId = () => {
  return idAcc++;
};

export default function App() {
  const [task, setTask] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTask((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const deleteTask = (id) => {
    setTask((existingTasks) => {
      return existingTasks.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          currentId={idAcc}
          title="Pendente"
          onAddTask={addTask}
          tasks={task.filter((t) => t.state === "Pendente")}
          setTasks={setTask}
          deleteTask={deleteTask}
        />
        <TaskList
          currentId={idAcc}
          title="Fazendo"
          onAddTask={addTask}
          tasks={task.filter((t) => t.state === "Fazendo")}
          setTasks={setTask}
          deleteTask={deleteTask}
        />
        <TaskList
          currentId={idAcc}
          title="Completo"
          onAddTask={addTask}
          tasks={task.filter((t) => t.state === "Completo")}
          setTasks={setTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
