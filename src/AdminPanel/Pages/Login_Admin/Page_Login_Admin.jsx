import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  width: 320px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Dados de login fixos para fins de exemplo (não recomendado para produção)
const FIXED_USER = 'JOSI';
const FIXED_PASSWORD = '1010';

const Page_Login_Admin = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Verifica se o email e a senha inseridos são os mesmos que os valores fixos
            if (email === FIXED_USER && password === FIXED_PASSWORD) {
                setIsLoggedIn(true);
                console.log('Login bem-sucedido');
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/admin'); // Redireciona para a rota desejada após o login
            } else {
                throw new Error('Email ou senha incorretos');
            }
        } catch (err) {
            console.error("Erro ao fazer login:", err);
            setError('Erro ao fazer login. Verifique suas credenciais.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div>
                <Title>Login</Title>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email:</label>
                        <Input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Carregando...' : 'Entrar'}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Page_Login_Admin;
