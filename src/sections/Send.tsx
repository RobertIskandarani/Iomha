import React from 'react';

import styles from './../styles/sections/Send.module.css';

import Arrows from '../components/Arrows';
import { useNavigate } from 'react-router-dom';

interface SendProps {
  name: string;
  artist: string;
  place: string;
  food: string;
}

const Send = ({ name, artist, place, food }: SendProps) => {
  const navigate = useNavigate();

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
      navigate(
        `iom-ha-madrij-reservation-info/${name
          .replaceAll(' ', '-')
          .toLowerCase()}`
      );
    }
  };

  return (
    <div className={styles.send}>
      <div className={styles.arrows}>
        <Arrows />
      </div>
      <div className={styles['send-content']}>
        COMPLETÁ TU RESERVA!
        <div className={styles.reserve} onClick={() => handleClick()}>
          RESERVAR
        </div>
      </div>
    </div>
  );
};

export default Send;
