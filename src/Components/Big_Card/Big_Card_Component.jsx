import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBigCard, Title, DateText, ImageMain, TitlePreview } from './Big_Card_Style';

const BigCardComponent = ({ article }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${article.id}`); // Substitua 'id' pelo identificador único do seu artigo
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const year = date.getFullYear();
    return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
  };

  // Formatação da data do artigo
  const formattedDate = formatDate(article.date);

  return (
    <ContainerBigCard onClick={handleClick}>
      <ImageMain src={article.imageUrl} alt={article.title} />
      <div>
        <Title>{article.title}</Title>
        <TitlePreview>{article.subtitle}</TitlePreview>
        <DateText><span>Publicado </span> {formattedDate}</DateText>
      </div>
    </ContainerBigCard>
  );
};

export default BigCardComponent;
