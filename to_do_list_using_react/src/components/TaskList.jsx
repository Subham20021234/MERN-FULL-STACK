import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, clearCompletedTasks } = useContext(TaskContext);

  return (
    <div>
     {tasks.length === 0 ? (
  <p className="no-tasks-message text-center">No tasks added yet.</p>
) : (
  <ul className="list-group mb-3">
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} index={index} />
    ))}
  </ul>
)}

      {tasks.some(task => task.completed) && (
        <button className="btn btn-danger w-100" onClick={clearCompletedTasks}>
          Clear Completed Tasks
        </button>
      )}
    </div>
  );
};

export default TaskList;
