import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/storeHooks';

import Apartments from 'components/Apartments/Apartments';
import Header from 'components/Header/Header';
import { loadInitialData } from 'store/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, [dispatch])

  return (
    <>
      <Header />
      <Apartments />
    </>
  );
}

export default App;
