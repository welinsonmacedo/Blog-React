// Footer_style.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FooterContainer = styled.footer`
  background-color: #cfe9ee;
  color: #0d0c5a;
  padding: 20px 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterLinks = styled.div`
  margin-bottom: 10px;
`;

export const FooterLink = styled(Link)`
  color: #0e1552;
  margin: 0 15px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
