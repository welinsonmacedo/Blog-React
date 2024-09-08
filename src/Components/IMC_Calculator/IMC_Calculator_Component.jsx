import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
  font-family: 'Roboto', sans-serif;
`;

const ContainerCalculator = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #6c63ff;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 150px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  color: #3a3a3a;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  font-size: 16px;
  color: #3a3a3a;

  input[type=number]::-webkit-inner-spin-button {
    appearance: none; 
  }
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6c63ff;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #574b90;
    transform: translateY(-2px);
  }
`;

const ContainerMessage = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
  color: #e63946;
  font-size: 18px;
`;
const Description = styled.p`
  text-align: center;
  font-weight: bold;
  color: #3992e6;
  font-size: 18px;
`;
const Recomendation = styled.p`
  text-align: center;
  font-weight: bold;
  color: #96ce2d;
  font-size: 18px;
`;

const IMCCalculatorComponent = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [description, setDescription] = useState('');
  const [recomendation, setRecomendation] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
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
      setDescription('Descrição: Se o IMC for inferior a 18.5, a pessoa é considerada abaixo do peso. Isso pode indicar que ela pode estar subnutrida ou ter problemas de saúde relacionados à desnutrição.');
      setRecomendation('Recomendações: Em casos de baixo peso, é aconselhável consultar um profissional de saúde para avaliar a dieta, o estilo de vida e outras condições subjacentes.');
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem('Peso normal');
      setDescription('Descrição: Um IMC nessa faixa indica que a pessoa tem um peso considerado saudável para sua altura. Isso geralmente está associado a um menor risco de doenças relacionadas ao peso.');
      setRecomendation('Recomendações: Manter hábitos saudáveis de alimentação e atividade física é importante para continuar dentro dessa faixa.');
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem('Sobrepeso');
      setDescription('Descrição: Um IMC entre 25 e 29.9 indica que a pessoa está com sobrepeso. Embora isso não seja necessariamente indicativo de problemas de saúde, pode aumentar o risco de doenças como hipertensão, diabetes tipo 2 e doenças cardíacas.');
      setRecomendation('Recomendações: Pode ser útil adotar uma alimentação equilibrada e aumentar a atividade física para evitar possíveis complicações de saúde.');
    } else {
      setMensagem('Obesidade');
      setDescription('Descrição: Um IMC de 30 ou mais indica obesidade. A obesidade é um fator de risco significativo para várias condições graves de saúde, incluindo doenças cardiovasculares, diabetes, apneia do sono, e certos tipos de câncer.');
      setRecomendation('Recomendações: É importante procurar orientação de um profissional de saúde para criar um plano de ação que inclua dieta, exercício e, em alguns casos, intervenções médicas.');
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
            <Description>{description}</Description>
            <Recomendation>{recomendation}</Recomendation>
          </ContainerMessage>
        )}
      </ContainerCalculator>
    </Container>
  );
};

export default IMCCalculatorComponent;
