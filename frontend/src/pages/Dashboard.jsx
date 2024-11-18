import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Your Contacts</h2>
      <div className="text-end mb-3">
        <Link to="/add-contact" className="btn btn-success">
          Add New Contact
        </Link>
      </div>
      <ContactList />
    </div>
  );
};

export default Dashboard;