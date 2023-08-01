import React from 'react';

import styles from './../styles/sections/Send.module.css';

import Arrows from '../components/Arrows';
import ReservePDF from '../pages/Reserve';
import { PDFDownloadLink } from '@react-pdf/renderer';

interface SendProps {
  name: string;
  artist: string;
  place: string;
  food: string;
}

const Send = ({ name, artist, place, food }: SendProps) => {
  const handleClick = () => {
    if (name === '') {
      alert('Falta ingresar el nombre');
    } else if (artist === 'Elegí un artista') {
      alert('Falta ingresar el artista');
    } else if (place === '') {
      alert('Falta ingresar el lugar');
    } else if (food === '') {
      alert('Falta ingresar la comida');
    } else {
    }
  };

  return (
    <div className={styles.send}>
      <div className={styles.arrows}>
        <Arrows />
      </div>
      <div className={styles['send-content']}>
        COMPLETÁ TU RESERVA!
        {name !== '' &&
          artist !== 'Elegí un artista' &&
          place !== '' &&
          food !== '' && (
            <PDFDownloadLink
              className={styles.reserve}
              document={
                <ReservePDF
                  name={name}
                  artist={artist}
                  place={place}
                  food={food}
                />
              }
              fileName={`reserva-${name
                .toLowerCase()
                .replaceAll(' ', '-')}.pdf`}
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Cargando...' : 'RESERVAR'
              }
            </PDFDownloadLink>
          )}
      </div>
    </div>
  );
};

export default Send;
