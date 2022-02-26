import React from "react";
import Item from "./Item";
import jumbotronData from "../../data/jumbotron.data";
import styles from "./jumbotron.module.sass";

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      {jumbotronData.map((jumbotron, index) => {
        return <Item key={`jumbotron-key-${index}`} jumbotron={jumbotron} />;
      })}
    </div>
  );
};

export default Jumbotron;
