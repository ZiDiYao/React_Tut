import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input 
          type="text" 
          value={editText} 
          onChange={(e) => setEditText(e.target.value)} 
        />
      ) : (
        <span onClick={() => onToggle(task.id)}>
          {task.text}
        </span>
      )}

      <div>
        <button onClick={handleEdit}>{isEditing ? "✅" : "✏️"}</button>
        <button onClick={() => onDelete(task.id)}>❌</button>
      </div>
    </li>
  );
};

export default TaskItem;
