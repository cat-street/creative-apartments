import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Apartment, ApartmentsState } from './types';

import entities from 'mock/entities.json';
import images from 'mock/images';

const initialState: ApartmentsState = {
  items: [],
  loading: false,
};

const loadInitialData = createAsyncThunk('apartments/fetchAll', async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const response = entities.response;
  return response.reduce((red: Apartment[], el) => {
    return red.concat({ ...el, image: images[el.id], favorites: false });
  }, []);
});

const apartmentSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {},
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

export { loadInitialData };
