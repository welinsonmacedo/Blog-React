import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  padding-top:100px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:#0c0741;
`;

const BookList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BookItem = styled.li`
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
`;

const BookTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color:#0c0741;
`;

const BookAuthor = styled.p`
  margin: 5px 0;
  font-style: italic;
  color:#960334;
`;

const BookDescription = styled.p`
  margin: 0;
`;

const books = [
  {
    img:"https://m.media-amazon.com/images/I/615KDfCxHFL._AC_UL320_.jpg",
    title: 'A morte é um dia que vale a pena viver',
    author: ' Ana Claudia Quintana Arantes',
    description: 'E um excelente motivo para se buscar um novo olhar para a vida',

  },
  {
    img:"https://m.media-amazon.com/images/I/412Jqch5FBL._AC_UL320_.jpg",
    title: 'Cartas do Ho oponopono',
    author: ' Luc Bodin',
    description: 'A Antiga Prática Havaiana da Gratidão e do Perdão.',

  },
  {
    img:"https://m.media-amazon.com/images/I/61TGNbg2-KL._SY425_.jpg",
    title: 'A coragem de viver quem você é',
    author: ' Walter Riso',
    description: ' O livro A CORAGEM DE VIVER QUEM VOCÊ É, oferece ao mundo, saídas para as dores emocionais que todos enfrentamos em nossas vidas',

  },
 
]

const Page_Book_Recommendations = () => {
  return (
    <Container>
      <Title>Recomendações de Livros</Title>
      <BookList>
        {books.map((book, index) => (
          <BookItem key={index}>
              <img src={book.img} alt="" width={'250px'} />
            <div>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>por {book.author}</BookAuthor>
            <BookDescription>{book.description}</BookDescription>
            </div>
          
          
          </BookItem>
        ))}
      </BookList>
    </Container>
  );
};

export default Page_Book_Recommendations;
