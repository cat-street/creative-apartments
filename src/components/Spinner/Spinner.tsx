import React, { FC } from 'react';

import styles from './Spinner.module.scss';

const Spinner: FC = () => (
  <div className={styles.loader}>Loading...</div>
);

export default Spinner;
