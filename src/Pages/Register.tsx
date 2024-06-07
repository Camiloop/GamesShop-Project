import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/slice/registrationSlice';
import { AppDispatch } from '../redux/store';

const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use AppDispatch
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    try {
      const resultAction = await dispatch(registerUser(userDetails));
      const userPayload = resultAction.payload;
      if (userPayload) {
        setEmail('');
        setPassword('');
        navigate('/login'); 
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;