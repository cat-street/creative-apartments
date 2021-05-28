import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Apartment, ApartmentsState } from '../types/types';

import entities from 'mock/entities.json';
import images from 'mock/images';

const initialState: ApartmentsState = {
  items: [],
  loading: false,
};

const loadInitialData = createAsyncThunk('apartments/fetchAll', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = entities.response;
  return response.reduce((red: Apartment[], el) => {
    return red.concat({ ...el, image: images[el.id - 1], favorites: false });
  }, []);
});

const apartmentSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    toggleFavorites(state, action: PayloadAction<number>) {
      const apartment = state.items.find((el) => el.id === action.payload);
      if (apartment) apartment.favorites = !apartment.favorites;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadInitialData.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(loadInitialData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default apartmentSlice.reducer;

export const { toggleFavorites } = apartmentSlice.actions;
export { loadInitialData };
