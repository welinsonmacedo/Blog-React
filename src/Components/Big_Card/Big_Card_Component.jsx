import React, { useState } from 'react';
import { ContainerBigCard, Title, Date, ImageMain, TitlePreview, Content } from './Big_Card_Style';

const Big_Card_Component = ({ article }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <ContainerBigCard onClick={toggleContentVisibility} isContentVisible={isContentVisible}>
      <ImageMain src={article.imageUrl} alt={article.title}  isContentVisible={isContentVisible} />
      <div>
        <Title>{article.title}</Title>
        <TitlePreview>{article.subtitle}</TitlePreview>
        <Date>{article.date}</Date>
        {isContentVisible && <Content>{article.content}</Content>}
      </div>
    </ContainerBigCard>
  );
};

export default Big_Card_Component;
