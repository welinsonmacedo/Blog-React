import styled from 'styled-components';

export const ContainerBigCard = styled.div`
 padding: 2rem;
 max-width:100%;
 display: flex;
 flex-direction: ${({ isContentVisible }) => (isContentVisible ? 'column-reverse' : 'row')};
 gap: 15px;
 cursor: pointer;
 &:hover {
    box-shadow: 2px 2px 2px 2px #c9bfbf;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
 flex-direction: column;
 padding: 1rem;
   
  }
`;
export const Title = styled.h1`
 color:#215c83;
`;
export const TitlePreview = styled.h2`
  color:#6491af;
`;
export const Content = styled.article`
  color:#6491af;
  font-weight: 600;
  text-align: justify;
  text-overflow:clip;
`;
export const SubTitle = styled.h3`
 
`;

export const DateText = styled.p`
 
`;
export const ImageMain = styled.img`
  max-width: ${({ isContentVisible }) => (isContentVisible ? '100%' : '300px')};
  min-width: 300px;
  object-fit: cover;
  transition: max-width 0.3s ease;
  @media (max-width: 768px) {
    max-width:100%;
    display:block;
    margin:0 auto;   
  }
`;
