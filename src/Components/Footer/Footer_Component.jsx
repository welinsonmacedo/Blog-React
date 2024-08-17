import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, FooterLink } from './Footer_style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">Sobre</FooterLink>
          <FooterLink to="/contact">Contato</FooterLink>
          <FooterLink to="/privacy">Política de Privacidade</FooterLink>
        </FooterLinks>
        <p>&copy; {new Date().getFullYear()} Welinson. Todos os direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
