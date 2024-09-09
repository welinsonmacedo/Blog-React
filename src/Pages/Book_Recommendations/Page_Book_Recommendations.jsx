import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Container = styled.div`
  padding: 20px;

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
  color: #0c0741;
`;

const BookList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BookItem = styled.li`
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 45px;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 768px) {
    display: flex;
 flex-direction: column;
 padding: 1rem;
   
  }
`;

const BookTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #0c0741;
`;

const BookAuthor = styled.p`
  margin: 5px 0;
  font-style: italic;
  color: #960334;
  text-transform: uppercase;
`;

const BookDescription = styled.p`
  margin: 0;
`;
const Button = styled.button`
padding: 10px;
background-color: #007bff;
color: white;
border: none;
border-radius: 4px;
font-size: 1em;
margin-top: 20px;
cursor: pointer;

&:hover {
  background-color: #0056b3;
}
`;
const Page_Book_Recommendations = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'livros'));
        const booksData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      <Title>Recomendações de Livros</Title>
      <BookList>
        {books.map((book, index) => (
          <BookItem key={index}>
            <img src={book.cover} alt={book.title} width={'250px'} />
            <div>
              <BookTitle>{book.title}</BookTitle>
              <BookAuthor> {book.author}</BookAuthor>
              <BookDescription>{book.description}</BookDescription>
              <Button><a href={book.sale} style={{textDecoration:'none',color:'#fff'}}>Onde Comprar </a></Button>
            </div>
          </BookItem>
        ))}
      </BookList>
    </Container>
  );
};

export default Page_Book_Recommendations;
