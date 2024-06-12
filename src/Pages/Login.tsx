import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slice/userSlice';
import { AppDispatch } from '../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import styled from 'styled-components';

const FormContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LoginForm = styled.form`
  background: #1e1e1e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
  color: #fff;
`;

const FormHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #ddd;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #333;
  border-radius: 4px;
  box-sizing: border-box;
  background: #2a2a2a;
  color: #fff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6200ea;
    outline: none;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #6200ea;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #3700b3;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #6200ea;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3700b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLoginEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userCredentials = {
      email,
      password,
    };

    try {
      const resultAction = await dispatch(loginUser(userCredentials));
      const result = unwrapResult(resultAction);

      if (result) {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return (
    <FormContainer>
      <LoginForm onSubmit={handleLoginEvent}>
        <FormHeading>Login</FormHeading>
        <Label>Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <Label>Password</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <LoginButton type="submit">LOGIN</LoginButton>
        <StyledLink to="/register">Register</StyledLink>
      </LoginForm>
    </FormContainer>
  );
};

export default Login;