import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task, index }) => {
  const { deleteTask, toggleTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      editTask(index, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success text-decoration-line-through' : ''}`}>
      <div className="d-flex align-items-center flex-wrap">
        <input type="checkbox" className="form-check-input me-2" checked={task.completed} onChange={() => toggleTask(index)} />
        {isEditing ? (
          <input
            type="text"
            className="form-control me-2"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      <div className="btn-group btn-group-sm mt-2 mt-md-0">
        {isEditing ? (
          <button className="btn btn-success" onClick={handleEdit}>Save</button>
        ) : (
          <button className="btn btn-outline-secondary" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="btn btn-outline-danger" onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
