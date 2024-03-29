import React, { Dispatch, SetStateAction, useState } from "react";

import styles from "./../styles/sections/Data.module.css";

import Separator from "../components/Separator";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Bren from "./../assets/Bren.jpeg";
import Caro from "./../assets/Caro.jpeg";
import Eve from "./../assets/Eve.jpeg";
import FedeKaplun from "./../assets/FedeKaplun.jpeg";
import Florte from "./../assets/Florte.jpeg";
import JuliGelis from "./../assets/JuliGelis.jpeg";
import Juze from "./../assets/Juze.jpeg";
import Lara from "./../assets/Lara.jpeg";
import Martu from "./../assets/Martu.jpeg";
import Mica from "./../assets/Mica.jpeg";
import Robert from "./../assets/Robert.jpeg";
import Renu from "./../assets/Renu.jpeg";
import Winter from "./../assets/Winter.jpeg";
import JuliVere from "./../assets/JuliVere.jpeg";
import Sol from "./../assets/Sol.jpeg";
import Mai from "./../assets/Mai.jpeg";
import Chechu from "./../assets/Chechu.jpeg";
import FedeStarop from "./../assets/FedeStarop.jpeg";

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
        <Separator number={1} text="REGISTRÁ TUS DATOS" />
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <div className={styles.title}>NOMBRE Y APELLIDO</div>
          <input
            className={styles["name-and-surname"]}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onClick={() => setSelected(false)}
            placeholder="Ingrese su nombre y apellido"
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
                onClick={() => setArtist("El Trinche")}
              >
                El Trinche
              </div>
              <div
                className={styles.option}
                onClick={() => setArtist("Sofi Morandi")}
              >
                Sofi Morandi
              </div>
              <div
                className={styles.option}
                onClick={() => setArtist("Julian Bellese")}
              >
                Julian Bellese
              </div>
              <div
                className={styles.option}
                onClick={() => setArtist("Manu Dons")}
              >
                Manu Dons
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.images}>
        <img className={styles.image} src={Bren} alt="Brem" />
        <img className={styles.image} src={Caro} alt="Caro" />
        <img className={styles.image} src={Eve} alt="Eve" />
        <img className={styles.image} src={FedeKaplun} alt="Kaplun" />
        <img className={styles.image} src={Florte} alt="Florte" />
        <img className={styles.image} src={JuliGelis} alt="Juli Gelis" />
        <img className={styles.image} src={Juze} alt="Juze" />
        <img className={styles.image} src={Lara} alt="Lara" />
        <img className={styles.image} src={Martu} alt="Martu" />
        <img className={styles.image} src={Mica} alt="Mica" />
        <img className={styles.image} src={Robert} alt="Robert" />
        <img className={styles.image} src={Renu} alt="Renu" />
        <img className={styles.image} src={Winter} alt="Winter" />
        <img className={styles.image} src={JuliVere} alt="Juli Vere" />
        <img className={styles.image} src={Sol} alt="Sol" />
        <img className={styles.image} src={Mai} alt="Mai" />
        <img className={styles.image} src={Chechu} alt="Chechu" />
        <img className={styles.image} src={FedeStarop} alt="Fede Staro" />
      </div>
    </div>
  );
};

export default Data;
