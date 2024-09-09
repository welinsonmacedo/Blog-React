import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Config/Firebase/FirebaseConfig'; // Certifique-se de que o caminho está correto
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 20px 20px ;
  cursor: pointer;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 10%;
  cursor: pointer;
  margin-bottom: 20px;
  @media (max-width: 768px) {
 flex-direction: column;
width:150px;
  }
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
  const [quoteVisible, setQuoteVisible] = useState(false);
  const timerRef = useRef(null); // Para armazenar o timer

  const fetchQuote = async () => {
    // Se a frase já está visível, não faz nada
    if (quoteVisible) return;

    setLoading(true);
    setError(null);
    try {
      const quotesCollection = collection(db, 'quotes'); // Nome da coleção no Firestore
      const quotesSnapshot = await getDocs(quotesCollection);
      const quotesList = quotesSnapshot.docs.map(doc => doc.data());
      const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
      setQuote(randomQuote.text + ' — ' + randomQuote.author);
      setQuoteVisible(true); // Mostrar a frase
      // Iniciar temporizador para ocultar a frase após 20 segundos
      timerRef.current = setTimeout(() => {
        setQuoteVisible(false);
      }, 10000);
    } catch (error) {
      setError('Erro ao carregar a frase');
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  // Limpar o temporizador se o componente for desmontado
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Container onClick={fetchQuote}>
      <Image
        src="/trevo.png"
        alt="Clique para gerar uma frase emocional"
      />
      {loading && <Quote>Carregando...</Quote>}
      {error && <Quote>{error}</Quote>}
      {!loading && !error && quoteVisible && <Quote>{quote}</Quote>}
      <p>Clique e motive seu dia!</p>
    </Container>
  );
};

export default EmotionalQuoteGenerator;
