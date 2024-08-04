import React from 'react';
import { FooterContainer, FooterContent, FooterLinks, FooterLink } from './Footer_style';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink to="/about">Sobre</FooterLink>
          <FooterLink href="/contact">Contato</FooterLink>
          <FooterLink href="/privacy">Política de Privacidade</FooterLink>
        </FooterLinks>
        <p>&copy; {new Date().getFullYear()} Welinson. Todos os direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
