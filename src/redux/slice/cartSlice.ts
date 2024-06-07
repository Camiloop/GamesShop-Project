import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
  id: number;
  tittle: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: Array<Products> = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<Products>) => {
        if(state.findIndex((product) => product.id === action.payload.id) === -1) {
            state.push(action.payload)
        } else {
            return state.map((i) => {
                return i.id === action.payload.id ? { ...i, quantity: i.quantity + 1} : i
            })
        }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
