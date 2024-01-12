import { Container } from 'components/Container/Container';
import { ContactsStyled, Title } from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsStyled>
      <Container className="container">
        <Title>Contacts</Title>
      </Container>
    </ContactsStyled>
  );
};
