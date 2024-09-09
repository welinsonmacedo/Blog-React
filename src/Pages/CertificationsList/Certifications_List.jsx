import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase/FirebaseConfig'; // Substitua pelo caminho correto do seu arquivo FirebaseConfig
import { collection, getDocs } from 'firebase/firestore';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
 
  min-height: 80vh;
 
`;
const CertificatesContainer = styled.div`
  max-width: 800px;
 
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 padding-top: 5rem;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const CertificateItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const CertificateName = styled.h3`
  margin-bottom: 10px;
  color: #007bff;
`;

const CertificateDetail = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #555;
`;

const Loading = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 18px;
`;

// Component
const CertificationsList = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'certificates'));
        const certificatesData = querySnapshot.docs.map(doc => doc.data().certificates).flat();
        setCertificates(certificatesData);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os certificados.');
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return <Loading>Carregando certificados...</Loading>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (certificates.length === 0) {
    return <ErrorMessage>Nenhum certificado encontrado.</ErrorMessage>;
  }

  return (
    <Container>
  <CertificatesContainer>
      
      <Title>Certificados e Cursos</Title>
      {certificates.map((certificate, index) => (
        <CertificateItem key={index}>
          <CertificateName>{certificate.name}</CertificateName>
          <CertificateDetail><strong>Instituição:</strong> {certificate.institution}</CertificateDetail>
          <CertificateDetail><strong>Data de Conclusão:</strong> {new Date(certificate.date).toLocaleDateString()}</CertificateDetail>
        </CertificateItem>
      ))}
    </CertificatesContainer>
    </Container>
  
  );
};

export default CertificationsList;
