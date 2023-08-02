import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading, getContacts } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};

export default App;
