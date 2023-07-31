import React, { Dispatch, SetStateAction, useState } from 'react';

import styles from './../styles/sections/Place.module.css';

import Separator from '../components/Separator';

import { BiLaugh, BiSolidFlag } from 'react-icons/bi';
import { BsFillHouseFill, BsFillHousesFill } from 'react-icons/bs';
import { GiWoodCabin, GiHangingSign, GiHighGrass } from 'react-icons/gi';
import { LuMountain } from 'react-icons/lu';
import { MdDinnerDining, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { TbBuildingBridge2, TbPig, TbSoccerField } from 'react-icons/tb';

interface PlaceProps {
  place: string;
  setPlace: Dispatch<SetStateAction<string>>;
}

const Place = ({ place, setPlace }: PlaceProps) => {
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div className={styles.place}>
      <div className={styles.separator}>
        <Separator number={2} text='SELECCIONÁ TU LUGAR' />
      </div>
      <div className={styles.selections}>
        <div className={styles.places}>
          <div
            className={`${styles['button-place']} ${place === 'Cabañas' &&
              styles.selected}`}
            onClick={() => setPlace('Cabañas')}
          >
            <div className={styles.button}>
              <BsFillHouseFill />
            </div>
            <div className={styles.text}>Cabañas</div>
          </div>
          <div
            className={`${styles['button-place']} ${place ===
              'Cabañas Viejas' && styles.selected}`}
            onClick={() => setPlace('Cabañas Viejas')}
          >
            <div className={styles.button}>
              <GiWoodCabin />
            </div>
            <div className={styles.text}>Cabañas viejas</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Puente' &&
              styles.selected}`}
            onClick={() => setPlace('Puente')}
          >
            <div className={styles.button}>
              <TbBuildingBridge2 />
            </div>
            <div className={styles.text}>Puente</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Comedor' &&
              styles.selected}`}
            onClick={() => setPlace('Comedor')}
          >
            <div className={styles.button}>
              <MdDinnerDining />
            </div>
            <div className={styles.text}>Comedor</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Cartel' &&
              styles.selected}`}
            onClick={() => setPlace('Cartel')}
          >
            <div className={styles.button}>
              <GiHangingSign />
            </div>
            <div className={styles.text}>Cartel</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Mastil' &&
              styles.selected}`}
            onClick={() => setPlace('Mastil')}
          >
            <div className={styles.button}>
              <BiSolidFlag />
            </div>
            <div className={styles.text}>Mastil</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Macom Blanco' &&
              styles.selected}`}
            onClick={() => setPlace('Macom Blanco')}
          >
            <div className={styles.button}>
              <GiHighGrass />
            </div>
            <div className={styles.text}>Macom Blanco</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Montaña' &&
              styles.selected}`}
            onClick={() => setPlace('Montaña')}
          >
            <div className={styles.button}>
              <LuMountain />
            </div>
            <div className={styles.text}>Montaña</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Comarca' &&
              styles.selected}`}
            onClick={() => setPlace('Comarca')}
          >
            <div className={styles.button}>
              <BsFillHousesFill />
            </div>
            <div className={styles.text}>Comarca</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Palacios' &&
              styles.selected}`}
            onClick={() => setPlace('Palacios')}
          >
            <div className={styles.button}>
              <BiLaugh />
            </div>
            <div className={styles.text}>Palacios</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Cancha' &&
              styles.selected}`}
            onClick={() => setPlace('Cancha')}
          >
            <div className={styles.button}>
              <TbSoccerField />
            </div>
            <div className={styles.text}>Cancha</div>
          </div>
          <div
            className={`${styles['button-place']} ${place === 'Corral' &&
              styles.selected}`}
            onClick={() => setPlace('Corral')}
          >
            <div className={styles.button}>
              <TbPig />
            </div>
            <div className={styles.text}>Corral</div>
          </div>
        </div>
        <div className={styles.input} onClick={() => setSelected(!selected)}>
          <div className={styles.title}>CANTIDAD DE ENTRADAS</div>
          <div className={styles.select}>
            {count}
            <MdOutlineKeyboardArrowDown
              className={`${styles.arrow} ${
                selected ? styles.show : styles.notSelected
              }`}
            />
          </div>
          {selected && (
            <div className={styles.option} onClick={() => setCount(1)}>
              1
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Place;
