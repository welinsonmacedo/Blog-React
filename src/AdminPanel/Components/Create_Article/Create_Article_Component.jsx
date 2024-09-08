import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importar os estilos do Quill
import { db, storage } from '../../../Config/Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 5rem;
  margin-top: 5rem;
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
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [references, setReferences] = useState('');

  const handleImageUpload = async (imageFile) => {
    const storageRef = ref(storage, `images/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let imageUrl = '';
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      await addDoc(collection(db, 'articles'), {
        title,
        subtitle,
        date,
        imageUrl,
        content,
        author,
        references,
      });

      // Clear the form
      setTitle('');
      setSubTitle('');
      setDate('');
      setImage(null);
      setContent('');
      setAuthor('');
      setReferences('');
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
        <label>Imagem</label>
        <Input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
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
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' },
              { 'indent': '-1' }, { 'indent': '+1' }],
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
      <div>
        <label>Autor</label>
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Referências</label>
        <Input
          type="text"
          value={references}
          onChange={(e) => setReferences(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Criar Artigo</Button>
    </Form>
  );
};

export default CreateArticle;
