import styled from 'styled-components';

export const ContainerBigCard = styled.div`
 padding: 2rem;
 min-width: 100%;
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
 padding: 0.5rem;
 min-width: 100%;
 max-width:100%;
 box-shadow: none;
  }
`;
export const Title = styled.h1`
 color:#215c83;
 @media (max-width: 768px) {
   font-size:19px ;
  }
`;
export const TitlePreview = styled.h2`
  color:#6491af;
  @media (max-width: 768px) {
   font-size:15px ;
  }
`;
export const Content = styled.article`
  color:#6491af;
  font-weight: 600;
  text-align: justify;
  text-overflow:clip;
`;
export const SubTitle = styled.h3`
  @media (max-width: 768px) {
   font-size:13px ;
  }
`;

export const DateText = styled.p`
  @media (max-width: 768px) {
   font-size:13px ;
  }
`;
export const ImageMain = styled.img`
  max-width: ${({ isContentVisible }) => (isContentVisible ? '100%' : '300px')};
  min-width: 300px;
  object-fit: cover;
  transition: max-width 0.3s ease;
  @media (max-width: 768px) {
    width:150px;
    display:block;
    margin:0 auto;   
  }
`;
