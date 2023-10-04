import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { ContactList } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
     localStorage.removeItem('contacts')
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts))
   }
 }, [contacts])

  const handleSubmit = newContact => {
    const existingContact = contacts.find(
      contact => contact.name === newContact.name
    );
    if (existingContact) {
      Notiflix.Notify.failure(`${existingContact.name} is already in contacts`);
    } else {
      const updatedContacts = [...contacts, newContact];
      setContacts(updatedContacts);
    }
  };

  const filterContacts = e => {
    setFilter(e.target.value);
  };

  const deleteContact = e => {
    const id = e.currentTarget.id;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    const updatedContacts = filteredContacts.filter(
      contact => contact.id !== id
    );
    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContacts}></Filter>
      <ContactList
        contacts={filteredContacts}
        onButtonClick={deleteContact}
      ></ContactList>
    </div>
  );
};
