import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Big_Card_Component from '../Big_Card/Big_Card_Component';
import { Container } from './Article_List_style';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData = querySnapshot.docs.map(doc => doc.data());
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
  <Container>
   
    {articles.map((article, index) => (
        <div key={index}>
          <Big_Card_Component article={article} />
         
        </div>
      ))}
    
   
    
   </Container>
  );
};

export default ArticleList;
