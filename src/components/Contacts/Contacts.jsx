import css from './Contacts.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onButtonClick }) => {
  if (contacts.length > 0) {
    return (
      <>
        <ul className={css.list}>
          {contacts.map(contact => (
            <li className={css.list_element} key={contact.id}>
              {contact.name} - {contact.number}
              <button
                className={css.button}
                id={contact.id}
                onClick={onButtonClick}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  return <p>No contacts found</p>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),

  onButtonClick: PropTypes.func,
};
