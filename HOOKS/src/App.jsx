import React, { useState } from 'react';
import { Form } from './Form';
import './App.css'

export default function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username) {
      alert('Please enter your username.');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }

    alert('Form submitted successfully!');
    console.log('Form Data:', formData);


    setFormData({
  username: '',
  email: '',
});

  };

  return (
    <div>
      <h2>Please fill the details😉</h2>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
}
