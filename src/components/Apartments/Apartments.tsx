import { Apartment } from 'types/types';

import SingleApartment from 'components/SingleApartment/SingleApartment';

import styles from './Apartments.module.scss';

type Props = {
  items: Apartment[];
  loading: boolean;
  onFavorite: (id: number) => void;
};

const Apartments = ({ items, loading, onFavorite }: Props) => {
  return (
    <main className={styles.container}>
      <ul className={styles.apartments}>
        {loading ? (
          <p>loading...</p>
        ) : (
          items.map((el) => <SingleApartment key={el.id} item={el} onFavorite={onFavorite} />)
        )}
      </ul>
    </main>
  );
};

export default Apartments;
