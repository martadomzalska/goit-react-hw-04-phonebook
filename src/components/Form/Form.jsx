import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmitForm}>
        <label className={css.label}>
          Name
          <input
            className={css.form_input}
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.form_input}
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add to contacts
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
