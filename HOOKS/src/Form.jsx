import React from 'react';

export const Form = ({ handleChange, handleSubmit, formData }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter username"
      />
    </div>

    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
    </div>

    <button type="submit">Submit</button>
  </form>
);
