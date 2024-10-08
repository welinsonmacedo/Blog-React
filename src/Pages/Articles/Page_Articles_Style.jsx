import styled from 'styled-components';

export const Container = styled.div`

 display:flex;

 flex-wrap:wrap;
 max-width:100%;
`;
export const ContainerCards = styled.div`
margin-top: 20px;
padding: 1rem;
padding-top: 3rem;
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
 gap: 15px;
 max-width:100%;
 @media (max-width:768px) {
    width:100%;
  }
`;
export const ContainerSmallCard = styled.div`

 max-width: 40%;
 @media (max-width: 768px) {
    display:block;
    margin: 0 auto;
    width:100%;
  }
`;
export const ContainerBigCard = styled.div`

 max-width:55%;
 @media (max-width: 768px) {
    display:block;
    margin: 0 auto;
    width:100%;
  }
`;
export const Title = styled.h2`
 
`;
