import styled from 'styled-components';

export const ContainerBigCard = styled.div`
 padding: 1.5px;
 max-width:300px;
 min-height:250px;
 
cursor: pointer;
&:hover {
    box-shadow: 2px 2px 2px 2px #e9e6e6;
    
  }
`;
export const Title = styled.h3`
  color:#161d22;
  min-height:30px;
  font-weight: 400;
  max-width: 200px;
  max-height: 50px;
  min-height: 50px;
  align-content: center;
`;
export const TitlePreview = styled.span`
 
`;
export const SubTitle = styled.h3`
 
`;

export const Date = styled.p`
 
`;
export const ImageMain = styled.img`
 min-width: 200px;
 max-width: 200px;
 object-fit:cover;
 min-height:200px;
 max-height:200px;
 display: block;
 margin: 0 auto;
`;
