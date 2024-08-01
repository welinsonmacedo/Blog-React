import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Config/Firebase/FirebaseConfig'; // Substitua pelo caminho correto do seu arquivo de configuração do Firebase
import { getDocs, collection } from 'firebase/firestore';
import { Container, Title, Content, Loading, Error,ImageMain } from './Page_Blog_Post_Style';

const PageBlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'articles'));
        const articlesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // Encontre o artigo pelo ID
        const foundArticle = articlesData.find(article => article.id === id);

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Artigo não encontrado');
        }
      } catch (error) {
        setError('Erro ao carregar o artigo');
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  if (!article) {
    return <Error>Artigo não encontrado</Error>;
  }

  return (
    <Container>
      <Title>{article.title}</Title>
      <ImageMain src={article.imageUrl}></ImageMain>
      <Content dangerouslySetInnerHTML={{ __html: article.content }} />
    </Container>
  );
};

export default PageBlogPost;
