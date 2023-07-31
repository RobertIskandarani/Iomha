import React from 'react';

import styles from './../styles/components/Separator.module.css';

interface SeparatorProps {
  number: number;
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ number, text }) => {
  return (
    <div className={styles.separator}>
      <div
        className={`${styles['separator-line']} ${
          number === 1
            ? styles.blue
            : number === 2
            ? styles['light-blue']
            : styles.pink
        }`}
      ></div>
      <div
        className={`${styles['section-name']} ${
          number === 1
            ? styles.blue
            : number === 2
            ? styles['light-blue']
            : styles.pink
        }`}
      >
        <div
          className={`${styles.number} ${
            number === 1 ? styles.b : number === 2 ? styles.lb : styles.p
          }`}
        >
          {number}
        </div>
        <div className={styles.name}>{text}</div>
      </div>
    </div>
  );
};

export default Separator;
