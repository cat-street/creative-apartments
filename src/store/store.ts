import { configureStore } from '@reduxjs/toolkit';

import apartmentsReducer from './apartmentsSlice'

const store = configureStore({
  reducer: apartmentsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export { loadInitialData } from './apartmentsSlice';
