import React from 'react';
import styles from "./CardOng.module.css"

function CardOng({image}) {
  return(
    <div className={styles.content}>
      <img src={image} className={styles.image} alt="asndkwjadkja"/>
    </div>
  );
}

export default CardOng;