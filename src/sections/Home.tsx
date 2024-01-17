import React from "react";

import styles from "./../styles/sections/Home.module.css";

import Arrows from "../components/Arrows";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.panel}>
        <h1>12 DE OCTUBRE</h1>
        <h3>RESERVA TU ENTRADA!</h3>
      </div>
      <div className={styles.arrows}>
        <Arrows />
      </div>
      <div className={`${styles.logo} ${styles.normal}`}></div>
      <div className={`${styles.logo} ${styles.big}`}></div>
    </div>
  );
};

export default Home;
