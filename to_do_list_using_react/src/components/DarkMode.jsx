import React from 'react';
import './DarkMode.css';
import SunIcon from '../icons/brightness-high.svg';
import MoonIcon from '../icons/moon.svg';


const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="d-flex align-items-center">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleDarkMode}
          checked={darkMode}
        />
        <span className="slider round"></span>
      </label>

      <img
        src={darkMode ? MoonIcon : SunIcon}
        alt={darkMode ? 'Moon Icon' : 'Sun Icon'}
        style={{ width: '24px', height: '24px', marginLeft: '10px' }}
      />
    </div>
  );
};

export default DarkMode;

