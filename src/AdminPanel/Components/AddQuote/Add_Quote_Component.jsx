import React, { useState } from 'react';
import { db} from '../../../Config/Firebase/FirebaseConfig'; 
import { collection, getDocs,addDoc } from 'firebase/firestore';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 5rem;
  padding-top: 5rem;
  margin-top: 5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const Message = styled.p`
  font-size: 1rem;
  color: ${props => (props.error ? 'red' : 'green')};
`;

const AddQuoteComponent = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);

    if (!text || !author) {
      setMessage('Por favor, preencha todos os campos.');
      setError(true);
      return;
    }

    try {
      await addDoc(collection(db, 'quotes'), {
        text,
        author,
      });
      setText('');
      setAuthor('');
      setMessage('Frase adicionada com sucesso!');
    } catch (error) {
      setMessage('Erro ao adicionar a frase.');
      setError(true);
      console.error('Error adding quote:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Adicionar Frases </h2>
        <Input
          type="text"
          placeholder="Texto da frase"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Button type="submit">Adicionar Frase</Button>
      </Form>
      {message && <Message error={error}>{message}</Message>}
    </Container>
  );
};

export default AddQuoteComponent;
