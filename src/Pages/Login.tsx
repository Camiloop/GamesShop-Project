import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slice/userSlice';
import { AppDispatch } from '../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import './login.css'

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
    <section className='form-container'>
      <form className='login-form' onSubmit={handleLoginEvent}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <br />
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <br />
        <button className='login-button' type="submit">LOGIN</button>
        <Link to={'/register'}>Register</Link>
      </form>
    </section>
  );
};

export default Login;