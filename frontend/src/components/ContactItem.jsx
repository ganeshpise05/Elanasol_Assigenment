import React from 'react';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <div className="list-group-item">
      <h5>{contact.name}</h5>
      <p>{contact.email}</p>
      <button onClick={() => onDelete(contact.id)} className="btn btn-danger btn-sm">
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
