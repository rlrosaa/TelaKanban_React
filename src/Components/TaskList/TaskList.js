import React, { useState } from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/icon2.svg";

export default function TaskList({
  currentId,
  title,
  onAddTask,
  tasks,
  setTasks,
  deleteTask,
}) {
  const [count, setCount] = useState(0);

  const addTask = () => {
    onAddTask("Nova tarefa " + currentId, title);
  };

  const onTaskUpdate = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { id, title, state };
        } else {
          return task;
        }
      });
    });
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              id={task.id}
              taskTitle={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              deleteTask={deleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button title="press" onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  currentId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
