import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (index, newText) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    ));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, editTask, clearCompletedTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
