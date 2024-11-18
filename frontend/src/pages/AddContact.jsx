// AddContact.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import for react-router v6

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Use navigate instead of history

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),  // Unique ID for new contact
      name,
      email,
    };

    onAddContact(newContact);  // Add the new contact (pass up to parent)
    navigate('/');  // Navigate back to the dashboard
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 w-100">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
