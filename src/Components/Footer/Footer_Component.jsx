import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, FooterLink,Logo,ContainerLogo } from './Footer_style';
import SocialMediaLinks from '../SocialMediaLinks/Social_Media_Links';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialMediaLinks/>
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">Sobre</FooterLink>
          <FooterLink to="/contact">Contato</FooterLink>
          <FooterLink to="/privacy">Política de Privacidade</FooterLink>
        </FooterLinks>
        <p>&copy; {new Date().getFullYear()} Joziane. Todos os direitos reservados.</p>
       
<ContainerLogo> <p>Desenvolido por Welinson Macedo  </p><Logo src='/Logowm.png'/>WmDigitalSolutions</ContainerLogo>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
