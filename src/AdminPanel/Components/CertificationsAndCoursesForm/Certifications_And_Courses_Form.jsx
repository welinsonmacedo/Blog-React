import React, { useState } from 'react';
import { db, storage } from '../../../Config/Firebase/FirebaseConfig'; // Certifique-se de que o FirebaseConfig tem a exportação do "storage"
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Importar as funções necessárias do Firebase Storage
import styled from 'styled-components';

// Styled Components (mesmo código anterior)
 /* Estilos aqui */ 
// Demais styled components...
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-top: 5rem;
  margin-top: 5rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

const AddButton = styled(Button)`
  background-color: #28a745;
  margin-bottom: 20px;
  &:hover {
    background-color: #218838;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 10px;
`;

// Component
const CertificationsAndCoursesForm = () => {
  const [certificates, setCertificates] = useState([{ name: '', institution: '', date: '', image: null }]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index][name] = value;
    setCertificates(updatedCertificates);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    const updatedCertificates = [...certificates];
    updatedCertificates[index].image = file; // Armazena o arquivo da imagem no estado
    setCertificates(updatedCertificates);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { name: '', institution: '', date: '', image: null }]);
  };

  const removeCertificate = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
  };

  const uploadImage = async (imageFile, index) => {
    if (!imageFile) return null; // Se não houver imagem, retorna null

    try {
      const imageRef = ref(storage, `certificates/${certificates[index].name}_${Date.now()}`);
      const snapshot = await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL; // Retorna a URL da imagem
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      throw new Error('Erro ao fazer upload da imagem');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (certificates.some(certificate => !certificate.name || !certificate.institution || !certificate.date)) {
      setError('Preencha todos os campos antes de enviar.');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const certificatesWithImages = await Promise.all(
        certificates.map(async (certificate, index) => {
          const imageUrl = await uploadImage(certificate.image, index); // Faz upload da imagem e obtém a URL
          return { ...certificate, image: imageUrl }; // Substitui o campo "image" pelo URL da imagem
        })
      );

      // Adicionando ao Firestore, mas agora com a URL da imagem (não o arquivo)
      await addDoc(collection(db, 'certificates'), {
        certificates: certificatesWithImages,
        createdAt: new Date(),
      });

      setSuccess('Certificados e cursos enviados com sucesso!');
      setCertificates([{ name: '', institution: '', date: '', image: null }]); // Reseta o formulário
    } catch (err) {
      setError('Erro ao salvar certificados. Tente novamente.');
      console.error('Erro ao salvar certificados:', err);
    }
  };

  return (
    <FormContainer>
      <Title>Adicionar Certificados e Cursos</Title>
      <Form onSubmit={handleSubmit}>
        {certificates.map((certificate, index) => (
          <FormGroup key={index}>
            <Label>Nome do Curso/Certificado:</Label>
            <Input
              type="text"
              name="name"
              value={certificate.name}
              onChange={e => handleInputChange(index, e)}
              placeholder="Ex: React Avançado"
              required
            />
            <Label>Instituição:</Label>
            <Input
              type="text"
              name="institution"
              value={certificate.institution}
              onChange={e => handleInputChange(index, e)}
              placeholder="Ex: Udemy"
              required
            />
            <Label>Data de Conclusão:</Label>
            <Input
              type="date"
              name="date"
              value={certificate.date}
              onChange={e => handleInputChange(index, e)}
              required
            />
            <Label>Imagem (opcional):</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={e => handleImageChange(index, e)}
            />
            <RemoveButton type="button" onClick={() => removeCertificate(index)}>
              Remover
            </RemoveButton>
          </FormGroup>
        ))}
        <AddButton type="button" onClick={addCertificate}>
          Adicionar Novo Certificado/Curso
        </AddButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <Button type="submit">Enviar</Button>
      </Form>
    </FormContainer>
  );
};

export default CertificationsAndCoursesForm;
