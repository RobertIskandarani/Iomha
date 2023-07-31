import React from 'react';

import styles from './../styles/components/Arrows.module.css';

const Arrows = () => {
  return (
    <div className={styles.arrows}>
      <div className={styles['down-arrow']}></div>
      <div className={styles['down-arrow']}></div>
      <div className={styles['down-arrow']}></div>
    </div>
  );
};

export default Arrows;
