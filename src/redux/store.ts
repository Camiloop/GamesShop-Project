import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import sortSlice from './slice/sortSlice';
import userReducer from './slice/userSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    sort: sortSlice,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;