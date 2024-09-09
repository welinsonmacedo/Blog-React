import styled from 'styled-components';

export const ContainerBigCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 padding: 1.5px;
 max-width:300px;
 min-height:250px;
 text-align: center;
cursor: pointer;
&:hover {
    box-shadow: 2px 2px 2px 2px #6e363683;
    
  }
`;
export const Title = styled.h3`
  color:#161d22;
  font-weight: 400;
  max-width: 200px;
  max-height: 50px;
  min-height: 10px;

  text-align: center;
`;
export const TitlePreview = styled.span`
 
`;
export const SubTitle = styled.h3`
 
`;

export const Date = styled.p`
 
`;
export const ImageMain = styled.img`
 min-width: 100%;
 max-width: 100%;
 object-fit:cover;
 min-height:250px;
 max-height:250px;
 display: block;
 margin: 0 auto;
 @media (max-width: 768px) {
  min-width: 300px;
 max-width: 300px;
  }
`;
