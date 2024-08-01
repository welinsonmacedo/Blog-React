import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importar os estilos do Quill
import { db } from '../../../Config/Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, 'articles'), {
        title,
        subtitle,
        date,
        imageUrl,
        content,
      });
      // Clear the form
      setTitle('');
      setSubTitle('');
      setDate('');
      setImageUrl('');
      setContent('');
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Criar Artigo</h2>
      <div>
        <label>Título</label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Legenda</label>
        <Input
          type="text"
          value={subtitle}
          onChange={(e) => setSubTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data</label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL</label>
        <Input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Conteúdo</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link', 'image'],
              ['clean']
            ],
          }}
          formats={[
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
          ]}
        />
      </div>
      <Button type="submit">Create Article</Button>
    </Form>
  );
};

export default CreateArticle;
