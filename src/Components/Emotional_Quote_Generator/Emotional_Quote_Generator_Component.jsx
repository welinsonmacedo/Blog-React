import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Config/Firebase/FirebaseConfig'; // Certifique-se de que o caminho está correto
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Quote = styled.p`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  max-width: 600px;
`;

const EmotionalQuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const quotesCollection = collection(db, 'quotes'); // Nome da coleção no Firestore
      const quotesSnapshot = await getDocs(quotesCollection);
      const quotesList = quotesSnapshot.docs.map(doc => doc.data());
      const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
      setQuote(randomQuote.text + ' — ' + randomQuote.author);
    } catch (error) {
      setError('Erro ao carregar a frase');
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Image
        src="https://static.vecteezy.com/ti/vetor-gratis/p3/6619614-trevo-da-sorte-com-quatro-folhas-em-estilo-de-cartoon-isolado-em-fundo-branco-santo-dia-simbolo-decoracao-ilustracao-vetor.jpg"
        alt="Clique para gerar uma frase emocional"
        onClick={fetchQuote}
      />
      {loading && <Quote>Carregando...</Quote>}
      {error && <Quote>{error}</Quote>}
      {!loading && !error && quote && <Quote>{quote}</Quote>}
    </Container>
  );
};

export default EmotionalQuoteGenerator;
