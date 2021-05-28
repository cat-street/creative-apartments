import image1 from 'assets/image_1.jpg';

import styles from './Apartments.module.scss';

const Apartments = () => (
  <main className={styles.container}>
    <ul className={styles.apartments}>
      <li className={styles.apartments__item}>
        <img className={styles.apartments__image} alt="" src={image1} />
        <div className={`${styles.apartments__star} ${styles.apartments__star_empty}`} />
        <h2 className={styles.apartments__title}>3-х комнатная на Минской</h2>
        <div className={styles.apartments__description}>
          <ul>
            <li className={styles.apartments__info}>
              <strong>Адрес:</strong> Тюмень, Минская ул, 3а, кв 123
            </li>
            <li className={styles.apartments__info}>
              <strong>Комнат:</strong> 3
            </li>
            <li className={styles.apartments__info}>
              <strong>Площадь:</strong> 123 м&sup2;
            </li>
            <li className={styles.apartments__agent}>
              <strong>Агент:</strong> Дроздов Василий Михайлович
            </li>
          </ul>
        </div>
      </li>
      <li className={styles.apartments__item}>
        <img className={styles.apartments__image} alt="" src={image1} />
        <h2 className={styles.apartments__title}>3-х комнатная на Минской</h2>
        <div className={styles.apartments__description}>
          <ul>
            <li className={styles.apartments__info}>
              <strong>Адрес:</strong> Тюмень, Минская ул, 3а, кв 123
            </li>
            <li className={styles.apartments__info}>
              <strong>Комнат:</strong> 3
            </li>
            <li className={styles.apartments__info}>
              <strong>Площадь:</strong> 123 м&sup2;
            </li>
            <li className={styles.apartments__agent}>
              <strong>Агент:</strong> Дроздов Василий Михайлович
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </main>
);

export default Apartments;
