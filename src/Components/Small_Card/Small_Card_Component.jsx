import React from 'react';
import { ContainerBigCard, Title,Date, ImageMain, TitlePreview,SubTitle } from './Small_Card._Style';

const Small_Card_Component = ({ article }) => {


    return (
        <ContainerBigCard>
            <Title>{article.title}</Title>
         
            <ImageMain src={article.imageUrl} alt={article.title}  />
            
        </ContainerBigCard>

    );
};

export default Small_Card_Component;
