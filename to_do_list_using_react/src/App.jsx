import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import DarkMode from './components/DarkMode';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className={`app-wrapper ${darkMode ? 'night' : 'day'}`}>
      <div className="app-container container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="app-title">To-Do List✔️</h1>
          <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
