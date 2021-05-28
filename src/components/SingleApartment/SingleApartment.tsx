import { Apartment } from 'types/types';
import { formatAddress, formatName } from 'utils/dataFormatters';

import styles from './SingleApartment.module.scss';

type Props = {
  item: Apartment;
  onFavorite: (id: number) => void;
};

const SingleApartment = ({ item, onFavorite }: Props) => {
  const handleStarClick = () => {
    onFavorite(item.id);
  }

  return (
    <li className={styles.apartments__item}>
      <img
        className={styles.apartments__image}
        alt={item.attributes.title}
        src={item.image}
      />
      <button
        type="button"
        onClick={handleStarClick}
        className={`${styles.apartments__star} ${
          item.favorites
            ? styles.apartments__star_filled
            : styles.apartments__star_empty
        }`}
      />
      <h2 className={styles.apartments__title}>{item.attributes.title}</h2>
      <div className={styles.apartments__description}>
        <ul>
          <li className={styles.apartments__info}>
            <strong>Адрес:</strong>{' '}
            {formatAddress(item.attributes.address)}
          </li>
          <li className={styles.apartments__info}>
            <strong>Комнат:</strong> {item.attributes.rooms}
          </li>
          <li className={styles.apartments__info}>
            <strong>Площадь:</strong> {item.attributes.area} м&sup2;
          </li>
          <li className={styles.apartments__agent}>
            <strong>Агент:</strong>{' '}
            {formatName(item.relationships.attributes)}
          </li>
        </ul>
      </div>
    </li>
  );
};

export default SingleApartment;
