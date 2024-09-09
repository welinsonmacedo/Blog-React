import React, { useState } from'react';
import styled from'styled-components';

const MoodContainer = styled.div`

  padding: 20px;

  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const Question = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const ScaleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0 20px;
`;

const ScaleButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.selected ? '#007bff' : '#ccc'};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.selected ? '#0056b3' : '#bbb'};
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    background-color: #218838;
  }
`;

const MoodMessage = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  text-align: center;
`;

const questions = [
  "Como você se sente em relação ao seu dia até agora?",
  "Você tem se sentido ansioso ou estressado recentemente?",
  "Como você avaliaria sua energia hoje?",
  "Você se sente satisfeito com suas interações sociais recentes?",
  "Você se sente calmo e relaxado neste momento?"
];

const Emotional_Status = () => {
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleResponse = (questionIndex, value) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = value;
    setResponses(newResponses);
    setSubmitted(false); // Reseta o estado de envio ao mudar a seleção
  };

  const handleSubmit = () => {
    if (responses.every(response => response !== null)) {
      setSubmitted(true);
    } else {
      alert('Por favor, responda todas as perguntas.');
    }
  };

  const calculateMood = () => {
    const sum = responses.reduce((a, b) => a + b, 0);
    return sum / responses.length;
  };

  return (
    <MoodContainer><Title>Avaliação Emocional</Title>

      {questions.map((question, index) => (
        <div key={index}><Question>{question}</Question><ScaleContainer>
            {[1, 2, 3, 4, 5].map(value => (
              <ScaleButton key={value}selected={responses[index] === value}onClick={() => handleResponse(index, value)}
              >
                {value}
              </ScaleButton>
            ))}
          </ScaleContainer></div>
      ))}

      <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>

      {submitted && (
        <MoodMessage>
          {calculateMood() <= 2 && 'Você parece estar se sentindo um pouco para baixo. Talvez seja bom conversar com alguém ou tirar um tempo para si.'}
          {calculateMood() > 2 && calculateMood() < 4 && 'Seu humor parece estar neutro. Pode ser um bom momento para fazer algo que você gosta.'}
          {calculateMood() >= 4 && 'Você está se sentindo bem! Continue assim e aproveite o seu dia!'}
        </MoodMessage>
      )}
    </MoodContainer>
  );
};

export default Emotional_Status;
