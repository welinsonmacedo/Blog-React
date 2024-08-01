// src/components/PageBlogPost/PageBlogPostStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  p {
    margin-bottom: 15px;
  }
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

export const Error = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
`;
export const ImageMain = styled.img`
  max-width: ${({ isContentVisible }) => (isContentVisible ? '100%' : '300px')};
  min-width: 300px;
  object-fit: cover;
  transition: max-width 0.3s ease;
  display: block;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width:100%;
    display:block;
    margin:0 auto;   
  }
`;