import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useAddContactMutation } from 'redux/contactSlice';

const ContactForm = ({contacts}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation()

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    sameName
      ? alert(`${name} or ${number} is already in contacts`)
      : addContact({name, number});

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={handleInputChange}
          value={name}
          type="text"
          placeholder="Name"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <input
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          placeholder="Number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="button-submit" type="submit">
        App contact
      </button>
    </Form>
  );
};

export default ContactForm;
