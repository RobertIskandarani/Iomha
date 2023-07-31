import React, { Dispatch, SetStateAction, useState } from 'react';

import styles from './../styles/sections/Data.module.css';

import Separator from '../components/Separator';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface DataProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  artist: string;
  setArtist: Dispatch<SetStateAction<string>>;
}

const Data = ({ name, setName, artist, setArtist }: DataProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.data}>
      <div className={styles.separator}>
        <Separator number={1} text='REGISTRÁ TUS DATOS' />
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <div className={styles.title}>NOMBRE Y APELLIDO</div>
          <input
            className={styles['name-and-surname']}
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onClick={() => setSelected(false)}
            placeholder='Ingrese su nombre y apellido'
          />
        </div>
        <div className={styles.input} onClick={() => setSelected(!selected)}>
          <div className={styles.title}>ELEGÍ UN ARTISTA</div>
          <div className={styles.select}>
            {artist}
            <MdOutlineKeyboardArrowDown
              className={`${styles.arrow} ${
                selected ? styles.selected : styles.notSelected
              }`}
            />
          </div>
          {selected && (
            <div className={styles.options}>
              <div
                className={styles.option}
                onClick={() => setArtist('Trinche')}
              >
                El Trinche
              </div>
              <div
                className={styles.option}
                onClick={() => setArtist('Sofi Morandi')}
              >
                Sofi Morandi
              </div>
              <div
                className={styles.option}
                onClick={() => setArtist('Julian Bellese')}
              >
                Julian Bellese
              </div>
              <div
                className={styles.option}
                onClick={() => setArtist('Manu Dons')}
              >
                Manu Dons
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Data;
