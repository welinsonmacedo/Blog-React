import React from 'react';
import { ContainerBigCard, Title,Date, ImageMain, TitlePreview,SubTitle } from './Small_Card._Style';
import { useNavigate } from 'react-router-dom';
const Small_Card_Component = ({ article  }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        

        navigate(`/post/${article.id}`);
    
        
      };
    return (
        <ContainerBigCard onClick={handleClick}>
            <Title>{article.title}</Title>
         
            <ImageMain src={article.imageUrl} alt={article.title}  />
            
        </ContainerBigCard>

    );
};

export default Small_Card_Component;
