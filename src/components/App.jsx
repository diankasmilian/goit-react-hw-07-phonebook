import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';
import { useGetContactsQuery } from 'redux/contactSlice';

const App = () => {

  const { data, error, isLoading } = useGetContactsQuery()

  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm contacts={data}/>

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && !error && data.length > 0 && <ContactList contacts={data}/>}
    </Container>
  );
};

export default App;
