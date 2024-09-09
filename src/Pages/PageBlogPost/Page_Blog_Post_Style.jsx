// src/components/PageBlogPost/PageBlogPostStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(8, 14, 51, 0.712);
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;
export const Reference = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Refer = styled.a`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
  max-width: 100px;
  text-size-adjust: auto;
  cursor: pointer;
`;


export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  p {
    margin-bottom: 15px;
    
  }
  img {
    display: block;
    margin: 0 auto; // Opcional: para centralizar as imagens
   max-width: 100%;
  }
  span{
    color:red;
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
  max-width:100%;
  min-width: auto;
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

export const ShareButtons = styled.div`
  margin-top: 20px;
  
  button {
    margin-right: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
  }
  @media (max-width: 768px) {
    max-width:100%;
   display :flex ;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   button{
    width: 60%;
   }
  }
`;