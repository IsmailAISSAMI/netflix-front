import React from "react";
import styles from "./item.module.sass";

const Item = (props) => {
  return (
    <div className={styles.jumbotron_item}>
      <div className={styles.jumbotron_item_text}>
        <h1>{props.jumbotron.title}</h1>
        <h2>{props.jumbotron.subtitle}</h2>
      </div>
      <div className={styles.jumbotron_item_media}>
        <img src={props.jumbotron.image.src} alt={props.jumbotron.image.alt} />
      </div>
    </div>
  );
};

export default Item;
