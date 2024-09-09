import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.1);
  margin-bottom: 20px;
 
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 10px;
  color: #5c0c57;

`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #a261a8;
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
   
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`

  @media (max-width: 768px) {

   
  }
`;
export const SectionTitle = styled.div`
 display: flex;
 justify-content: center;
  align-items: center;
  gap: 100px;
  @media (max-width: 768px) {
 flex-direction: column;
 padding: 1rem;
 gap: 20px;
   
  }
`;

export const Image = styled.img`
  width: 300px;
  border: none;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  text-align: justify;
`;
