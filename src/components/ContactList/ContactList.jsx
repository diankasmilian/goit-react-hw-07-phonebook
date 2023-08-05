import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { getFilter } from 'redux/selectors';
import { useDeleteContactMutation } from 'redux/contactSlice';

const ContactList = ({contacts}) => {
  
  const filter = useSelector(getFilter);

  const [deleteContact] = useDeleteContactMutation()

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const onRemoveContact = id => {
    deleteContact(id)};



  return (
    <List>
      {filterContacts.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className="button-remove" onClick={() => onRemoveContact(id)}>
            &times;
          </button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
