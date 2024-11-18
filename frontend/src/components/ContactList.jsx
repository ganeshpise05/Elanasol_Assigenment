import React, { useState } from 'react';
import ContactItem from './ContactItem';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Nilesh Mandge', email: 'nilesh@example.com' },
    { id: 2, name: 'Rupesh Mandge', email: 'rupesh@example.com' },
    { id: 3, name: 'Ganesh Pise', email: 'ganesh@example.com' },
  ]);

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="list-group">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ContactList;
