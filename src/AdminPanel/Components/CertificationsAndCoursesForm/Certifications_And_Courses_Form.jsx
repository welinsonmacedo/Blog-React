import React, { useState } from 'react';
import { db } from '../../../Config/Firebase/FirebaseConfig'; // Substitua pelo caminho correto do seu arquivo FirebaseConfig
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';

// Styled Components
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
  const [certificates, setCertificates] = useState([{ name: '', institution: '', date: '' }]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCertificates = [...certificates];
    updatedCertificates[index][name] = value;
    setCertificates(updatedCertificates);
  };

  const addCertificate = () => {
    setCertificates([...certificates, { name: '', institution: '', date: '' }]);
  };

  const removeCertificate = (index) => {
    const updatedCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(updatedCertificates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (certificates.some(certificate => !certificate.name || !certificate.institution || !certificate.date)) {
      setError('Preencha todos os campos antes de enviar.');
      return;
    }

    setError('');
    setSuccess('');

    try {
      // Adicionando ao Firestore
      await addDoc(collection(db, 'certificates'), {
        certificates, // Enviamos a lista completa de certificados/cursos
        createdAt: new Date(),
      });
      setSuccess('Certificados e cursos enviados com sucesso!');
      setCertificates([{ name: '', institution: '', date: '' }]); // Reseta o formulário
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
