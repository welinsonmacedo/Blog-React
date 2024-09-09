import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Ícones de redes sociais

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaçamento entre os ícones */
  margin: 20px 0;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff; /* Cor ao passar o mouse, você pode alterar para sua preferência */
  }
`;

const SocialMediaLinks = () => {
  return (
    <SocialMediaContainer>
      <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </SocialIcon>
      <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </SocialIcon>
      <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialIcon>
      <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </SocialIcon>
     
    </SocialMediaContainer>
  );
};

export default SocialMediaLinks;
