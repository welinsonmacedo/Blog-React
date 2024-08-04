import React, { useState } from 'react';
import { db } from '../../../Config/Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Container, Form, Input, TextArea, Button } from './Add_Book_Style';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && cover && author && description) {
      try {
        await addDoc(collection(db, 'livros'), {
          title,
          cover,
          author,
          description,
        });
        setTitle('');
        setCover('');
        setAuthor('');
        setDescription('');
        setSuccess('Livro adicionado com sucesso!');
        setError('');
      } catch (err) {
        setError('Erro ao adicionar o livro: ' + err.message);
        setSuccess('');
      }
    } else {
      setError('Por favor, preencha todos os campos.');
      setSuccess('');
    }
  };

  return (
    <Container>
      <h2>Adicionar Novo Livro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="URL da Capa"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextArea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Adicionar Livro</Button>
      </Form>
    </Container>
  );
};

export default AddBook;
