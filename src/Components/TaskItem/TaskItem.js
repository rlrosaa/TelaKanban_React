import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TaskItem.css";

export default function TaskItem({
  id,
  taskTitle,
  taskState,
  onTaskUpdate,
  deleteTask,
}) {
  const [isEditable, setIsEditable] = useState(0);
  const [editableTitle, setEditableTitle] = useState(taskTitle);

  const onTitleChange = (event) => {
    newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key == "Enter") {
      setIsEditable(false);
      if (editableTitle.length === 0) {
        deleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, taskTitle, event.target.value);
  };

  if (isEditable) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onKeyPress={onKeyPress}
          onChange={onTitleChange}
        ></input>
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditable(true)}>{editableTitle}</div>
        <select value={taskState} onChange={onTaskStateChange}>
          <option value="Pendente"> Pendente </option>
          <option value="Fazendo"> Fazendo </option>
          <option value="Completo"> Completo </option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  taskTitle: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
