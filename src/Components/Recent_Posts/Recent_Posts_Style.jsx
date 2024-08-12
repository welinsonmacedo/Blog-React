// RecentPosts_style.js
import styled from 'styled-components';

export const Container = styled.div`

`;
export const ContainerPosts = styled.div`
display: grid;
justify-content: center;
align-items: center;
width: 80%; /* Define a largura do grid */
margin: 0 auto;
grid-template-columns: 33.3% 33.3% 33.3%;
margin: 0 auto;
@media (max-width: 768px) {
   display   :flex ;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
  }
`;
export const Title = styled.h2`

 text-align: center;
 color:#687f8f;


`;