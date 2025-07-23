import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-dark">Add</button>
    </form>
  );
};

export default TaskInput;
