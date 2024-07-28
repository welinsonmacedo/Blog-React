import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`

  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
`;
const ContainerCalculator = styled.div`

  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #582d9c;
  background-color: #cac0da;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 margin-top: 150px;
`;
const Title = styled.h2`
  text-align: center;
  font-weight:600;
  color:#201f25;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
 outline:none;
 input[type=number]::-webkit-inner-spin-button{
    appearance: none; 
}
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContainerMessage = styled.p`
 display: flex;
 gap: 20px;
 align-items: center;
 justify-content: center;
`;

const MessageIMC = styled.p`
  text-align: center;
  font-weight: bold;
color: #3a0458;
  font-size: 35px;
`;
const Message = styled.p`
  text-align: center;
  font-weight: bold;
  color:#4e1515;
  font-size: 18px;
`;

const IMCCalculatorComponent = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      // Remove caracteres não numéricos e converte para metros
      const alturaEmMetros = parseFloat(altura.replace(/[^0-9]/g, '')) / 100;
      if (!isNaN(alturaEmMetros) && alturaEmMetros > 0) {
        const imcCalculado = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
        setImc(imcCalculado);
        definirMensagem(imcCalculado);
      } else {
        setMensagem('Por favor, insira uma altura válida.');
      }
    } else {
      setMensagem('Por favor, insira peso e altura válidos.');
    }
  };

  const definirMensagem = (imc) => {
    if (imc < 18.5) {
      setMensagem('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem('Sobrepeso');
    } else {
      setMensagem('Obesidade');
    }
  };

  return (
    <Container>
        <ContainerCalculator>
        <Title>Calcule Aqui seu IMC</Title>
      <Label>
        Peso (kg):
        <Input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </Label>
      <Label>
        Altura (mts):
        <Input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </Label>
      <Button onClick={calcularIMC}>Calcular IMC</Button>
      {imc && (
        <ContainerMessage>
          <MessageIMC>{imc}</MessageIMC>
          <Message>{mensagem}</Message>
        </ContainerMessage>
      )}
        </ContainerCalculator>
    
    </Container>
  );
};

export default IMCCalculatorComponent;
