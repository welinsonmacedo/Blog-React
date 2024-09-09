import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Config/Firebase/FirebaseConfig'; // Substitua pelo caminho correto do seu arquivo de configuração do Firebase
import { getDocs, collection } from 'firebase/firestore';
import { Container, Title, Content, Loading, Error, ImageMain, ShareButtons, Refer, Reference } from './Page_Blog_Post_Style';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importa os ícones

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
    return <Loading> Carregando...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  if (!article) {
    return <Error>Artigo não encontrado</Error>;
  }

  // Funções para compartilhar
  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(article.title)}%20${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnInstagram = () => {
    const url = `https://www.instagram.com/`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Title>{article.title}</Title>
      <ImageMain src={article.imageUrl} alt={article.title} />
      <Content dangerouslySetInnerHTML={{ __html: article.content }} />
      <p><strong>Autor(a): </strong></p>
      <Refer>{article.author}</Refer>
      <p>
        <strong>  Referências:</strong>
        <Reference href={article.references} target="_blank" rel="noopener noreferrer">
            Ver Referências
        </Reference>
      </p>
      <ShareButtons>
        <button onClick={shareOnWhatsApp}><FaWhatsapp size={24} /></button>
        <button onClick={shareOnInstagram}><FaInstagram size={24} /></button>
        <button onClick={shareOnFacebook}><FaFacebook size={24} /></button>
        <button onClick={shareOnTwitter}><FaTwitter size={24} /></button>
      </ShareButtons>
    </Container>
  );
};

export default PageBlogPost;
