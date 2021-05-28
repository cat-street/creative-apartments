import { Apartment } from 'types/types';

import SingleApartment from 'components/SingleApartment/SingleApartment';

import styles from './Apartments.module.scss';

type Props = {
  items: Apartment[];
  onFavorite: (id: number) => void;
};

const Apartments = ({ items, onFavorite }: Props) => {
  return (
    <main className={styles.container}>
      <ul className={styles.apartments}>
        {items.map((el) => (
          <SingleApartment key={el.id} item={el} onFavorite={onFavorite} />
        ))}
      </ul>
    </main>
  );
};

export default Apartments;
