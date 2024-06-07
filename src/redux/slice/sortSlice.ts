import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface SortState {
  sortBy: string | null;
}

const initialState: SortState = {
  sortBy: null,
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string | null>) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortSlice.actions;

export const selectSortBy = (state: RootState) => state.sort.sortBy;

export default sortSlice.reducer;