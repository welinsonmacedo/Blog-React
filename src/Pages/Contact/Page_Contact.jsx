import React, { useState } from'react';
import styled from'styled-components';

const ContactContainer = styled.div`
padding: 20px;
padding-top: 150px;
  
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
margin-bottom: 25px ;

`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  resize: vertical;
  min-height: 100px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 1em;
  text-align: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const WhatsAppLink = styled(SocialLink)`
  background-color: #25d366;
`;

const InstagramLink = styled(SocialLink)`
  background-color: #e4405f;
`;

const EmailLink = styled(SocialLink)`
  background-color: #ea4335;
`;

const Page_Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado por entrar em contato!');
    // Adicione a lógica de envio aqui, como enviar para um servidor ou serviço de email.
  };

  return (
    <ContactContainer><Title>Entre em Contato</Title><SectionTitle>Envie uma Mensagem</SectionTitle><Form onSubmit={handleSubmit}><Label htmlFor="name">Nome:</Label><Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><Label htmlFor="email">Email:</Label><Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><Label htmlFor="message">Mensagem:</Label><TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        /><Button type="submit">Enviar</Button></Form><SectionTitle>Ou Contate-nos Via</SectionTitle><SocialLinks><WhatsAppLink href="https://wa.me/SEU_NUMERO_AQUI" target="_blank">
          WhatsApp
        </WhatsAppLink><InstagramLink href="https://instagram.com/SEU_USUARIO_AQUI" target="_blank">
          Instagram
        </InstagramLink><EmailLink href="mailto:SEU_EMAIL_AQUI">
          Email
        </EmailLink></SocialLinks></ContactContainer>
  );
};

export default Page_Contact;
