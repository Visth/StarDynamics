import React from 'react';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import { StyledContainer } from './ContactUsForm-styling';
import P from '../../atoms/Paragraph';
import styled from 'styled-components';

const initialValues = {
  messageContent: '',
  contactPerson: '',
  companyName: '',
  phoneNumber: '',
  country: '',
  email: '',
};

interface Props {
  messageContent?: string;
  headerText?: string;
}

const StyledMessage = styled.p<{ error?: boolean }>`
  color: ${(props) => (props.error ? 'red' : 'green')};
  font-size: 1rem;
  margin-top: 1rem;
`;

export const ContactUsForm: React.FC<Props> = ({ messageContent = '', headerText = 'Contact us now' }) => {
  const [formState, setFormState] = React.useState(initialValues);
  const [formSended, setFormSended] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const resetForm = () => {
    setTimeout(() => {
      setFormSended(false);
      setErrorMessage('');
      setFormState(initialValues);
    }, 2000);
  };

  const submitForm = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();

    // Walidacja pól formularza
    if (formState.companyName === '' && formState.contactPerson === '') {
      setErrorMessage('Company name or name of the contact person must be provided.');
      return;
    }

    if (formState.email === '') {
      setErrorMessage('Email must be provided.');
      return;
    }

    // Jeśli formularz poprawny
    setFormSended(true);
    setErrorMessage('');
    console.log('Simulated form submission:', formState);

    // Zresetuj formularz po 2 sekundach
    resetForm();
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  };

  return (
    <StyledContainer className='contact-us-container'>
      <Header size="l" text={headerText} />
      <form>
        <input
          type="text"
          placeholder="Your name and surname..."
          name="companyName"
          value={formState.companyName}
          onChange={handleChange}
        />
        <input
          className="row"
          type="text"
          placeholder="Contact person’s name... *"
          name="contactPerson"
          value={formState.contactPerson}
          onChange={handleChange}
        />
        <input
          className="row"
          type="text"
          placeholder="Country..."
          name="country"
          value={formState.country}
          onChange={handleChange}
        />
        <input
          className="row"
          type="email"
          placeholder="E-mail address... *"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className="row"
          type="text"
          placeholder="Phone number..."
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={handleChange}
        />
        <textarea
          placeholder={messageContent === '' ? "I am interested in StarDynamics Services..." : messageContent}
          name="messageContent"
          value={formState.messageContent}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <Button
          type="submit"
          asButton
          onClick={submitForm}
          text="send message"
          bordercolor={'blue'}
          backgroundColor="blue"
        />
      </form>
      {errorMessage && <StyledMessage error>{errorMessage}</StyledMessage>}
      {formSended && <StyledMessage>Message sent. Thank You.</StyledMessage>}
    </StyledContainer>
  );
};
