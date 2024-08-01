import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Big_Card_Component from '../Big_Card/Big_Card_Component';
import { Container } from './Article_List_style';
import Small_Card_Component from '../Small_Card/Small_Card_Component';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Ordenar os artigos por data, do mais recente ao mais antigo
        const sortedArticles = articlesData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  // Filtrar artigos com base no título
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquise Aqui"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {filteredArticles.map((article) => (
        <div key={article.id}>
          <Big_Card_Component article={article} />
        </div>
      ))}
      
    </Container>
  );
};

export default ArticleList;
