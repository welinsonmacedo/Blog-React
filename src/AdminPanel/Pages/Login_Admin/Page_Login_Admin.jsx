import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../Config/Firebase/FirebaseConfig'; // Importar o auth configurado

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

const Label = styled.label`
  margin-top: 10px;
  color: #333;
  font-size: 14px;
`;

const RegisterLink = styled.p`
  margin-top: 20px;
  color: #007BFF;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Page_Login_Admin = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [savePassword, setSavePassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Carregar senha salva do localStorage, se existir
    useEffect(() => {
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPassword = localStorage.getItem('savedPassword');
        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Realizar login com Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
            console.log('Login bem-sucedido', userCredential.user);
            localStorage.setItem('isLoggedIn', 'true');

            // Salvar email/senha se o usuário escolher essa opção
            if (savePassword) {
                localStorage.setItem('savedEmail', email);
                localStorage.setItem('savedPassword', password);
            } else {
                localStorage.removeItem('savedEmail');
                localStorage.removeItem('savedPassword');
            }

            navigate('/admin/homePanel'); // Redireciona para a rota desejada após o login
        } catch (err) {
            console.error("Erro ao fazer login:", err);
            // Adiciona mensagens de erro detalhadas
            if (err.code === 'auth/invalid-email') {
                setError('O email fornecido não é válido.');
            } else if (err.code === 'auth/user-not-found') {
                setError('Nenhum usuário encontrado com esse email.');
            } else if (err.code === 'auth/wrong-password') {
                setError('Senha incorreta.');
            } else {
                setError('Erro ao fazer login. Verifique suas credenciais.');
            }
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
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Label>
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            Mostrar Senha
                        </Label>
                    </div>
                    <div>
                        <Label>
                            <input
                                type="checkbox"
                                checked={savePassword}
                                onChange={() => setSavePassword(!savePassword)}
                            />
                            Salvar senha
                        </Label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Carregando...' : 'Entrar'}
                    </Button>
                    <RegisterLink>
                        <Link to="/admin/registerUser">Não tem uma conta? Crie uma agora</Link>
                    </RegisterLink>
                </form>
            </div>
        </Container>
    );
};

export default Page_Login_Admin;
