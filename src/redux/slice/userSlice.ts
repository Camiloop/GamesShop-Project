import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserCredentials {
  email: string;
  password: string;
}

interface UserResponse {
  token: string;
}

interface UserState {
  loading: boolean;
  user: UserResponse | null;
  error: string | null;
}

export const loginUser = createAsyncThunk<UserResponse, UserCredentials>(
  'user/loginUser',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post<UserResponse>('https://reqres.in/api/login', userCredentials);
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ message: 'Unexpected error occurred' });
    }
  }
);

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserResponse>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.payload) {
          state.error = action.payload as string;
        } else {
          state.error = action.error.message ?? 'Unknown error';
        }
      });
  },
});

export default userSlice.reducer;