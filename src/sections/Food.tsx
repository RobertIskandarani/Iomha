import React, { Dispatch, SetStateAction } from "react";

import styles from "./../styles/sections/Food.module.css";

import Separator from "../components/Separator";

interface FoodProps {
  food: string;
  setFood: Dispatch<SetStateAction<string>>;
}

const Food = ({ food, setFood }: FoodProps) => {
  return (
    <div className={styles.food}>
      <div className={styles.separator}>
        <Separator number={3} text="SELECCIONÁ TU COMIDA" />
      </div>
      <div className={styles["food-content"]}>
        <div className={styles.alert}>COCINA BY PERLA</div>
        <div className={styles.foods}>
          <div
            className={`${styles["button-food"]} ${
              food === "Fideos" && styles.selected
            }`}
            onClick={() => setFood("Fideos")}
          >
            Fideos
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Albondigas" && styles.selected
            }`}
            onClick={() => setFood("Albondigas")}
          >
            Albondigas
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Tortilla" && styles.selected
            }`}
            onClick={() => setFood("Tortilla")}
          >
            Tortilla
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Ensalada" && styles.selected
            }`}
            onClick={() => setFood("Ensalada")}
          >
            Ensalada
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Pollo" && styles.selected
            }`}
            onClick={() => setFood("Pollo")}
          >
            Pollo
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Papas" && styles.selected
            }`}
            onClick={() => setFood("Papas")}
          >
            Papas
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Empanadas" && styles.selected
            }`}
            onClick={() => setFood("Empanadas")}
          >
            Empanadas
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Tarta" && styles.selected
            }`}
            onClick={() => setFood("Tarta")}
          >
            Tarta
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Pizza" && styles.selected
            }`}
            onClick={() => setFood("Pizza")}
          >
            Pizza
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Arroz" && styles.selected
            }`}
            onClick={() => setFood("Arroz")}
          >
            Arroz
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Milanesa" && styles.selected
            }`}
            onClick={() => setFood("Milanesa")}
          >
            Milanesa
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
          <div
            className={`${styles["button-food"]} ${
              food === "Pure" && styles.selected
            }`}
            onClick={() => setFood("Pure")}
          >
            Pure
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
