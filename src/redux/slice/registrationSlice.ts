import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface RegistrationData {
  email: string;
  password: string;
}

interface RegistrationState {
  loading: boolean;
  user: any; 
  error: string | null; 
}

const initialState: RegistrationState = {
  loading: false,
  user: null,
  error: null,
};

export const registerUser = createAsyncThunk(
  'registration/registerUser',
  async (userData: RegistrationData) => {
    const response = await axios.post('https://reqres.in/api/register', userData);
    return response.data;
  }
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null; 
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Registration failed';
      });
  },
});

export default registrationSlice.reducer;