import React from 'react';
import { ContainerBigCard, Title,Date, ImageMain, TitlePreview,SubTitle } from './Big_Card_Style';

const Big_Card_Component = () => {


    return (
        <ContainerBigCard>
            <Title>Reiki: o que é, para que serve, benefícios e como fazer</Title>
            <TitlePreview>O reiki é uma terapia integrativa que proporciona benefícios físicos e mentais através da canalização de energia</TitlePreview>
            <Date>21/07/2024</Date>
            <ImageMain src="https://static1.minhavida.com.br/treatments/df/48/df/c2/terapeuta-reiki-com-as-maos-sobre-o-rosto-de-uma-paciente-full-1.jpg"/>
            
        </ContainerBigCard>

    );
};

export default Big_Card_Component;
