import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';

import Apartments from 'components/Apartments/Apartments';
import Header from 'components/Header/Header';
import { loadInitialData } from 'store/store';
import { toggleFavorites } from 'store/apartmentsSlice';

function App() {
  const apartments = useAppSelector((state) => state.items);
  const loading = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const handleFavorite = (id: number) => {
    dispatch(toggleFavorites(id));
  }

  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch])

  return (
    <>
      <Header />
      <Apartments items={apartments} loading={loading} onFavorite={handleFavorite} />
    </>
  );
}

export default App;
