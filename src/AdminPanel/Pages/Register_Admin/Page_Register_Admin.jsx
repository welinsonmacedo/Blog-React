// src/components/Page_Register_Admin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Config/Firebase/FirebaseConfig'; // Verifique se o caminho está correto

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

const ErrorText = styled.p`
  color: red;
`;

const Page_Register_Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Usuário criado com sucesso', userCredential.user);
            navigate('/admin');
        } catch (err) {
            console.error('Erro ao criar usuário:', err);
            if (err.code === 'auth/email-already-in-use') {
                setError('O email já está em uso.');
            } else if (err.code === 'auth/weak-password') {
                setError('A senha deve ter pelo menos 6 caracteres.');
            } else {
                setError('Erro ao criar usuário. Verifique suas informações.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div>
                <Title>Criar Conta</Title>
                <form onSubmit={handleRegister}>
                    <div>
                        <label>Email:</label>
                        <Input
                            type="email"
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
                    {error && <ErrorText>{error}</ErrorText>}
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Carregando...' : 'Registrar'}
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Page_Register_Admin;
