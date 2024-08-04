import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Big_Card_Component from '../Big_Card/Big_Card_Component';
import {
  Container,
  ContainerResponsivo,
  ContainerSearch,
  SearchIconContainer,
  Search,
  SearchIcon,
} from './Article_List_style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Article_List_Component = () => {
  const [articles, setArticles] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <ContainerResponsivo>
      <ContainerSearch>
        <SearchIconContainer>
          <SearchIcon icon={faSearch} />
          <Search
            type="text"
            placeholder="Pesquise Aqui"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </SearchIconContainer>
      </ContainerSearch>
      <div>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Container key={article.id}>
              <Big_Card_Component article={article} />
            </Container>
          ))
        ) : (
          <p>Nenhum artigo encontrado</p>
        )}
      </div>
    </ContainerResponsivo>
  );
};

export default Article_List_Component;
