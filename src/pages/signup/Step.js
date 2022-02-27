import React from "react";
import styles from "./Step.module.sass";

const Step = (props) => {
  return (
    <div className={styles.step}>
      {props.image ? (
        <img
          src={props.image.src}
          alt={props.image.alt}
          className={props.className}
        />
      ) : (
        <></>
      )}
      <div className={styles.step_indicator}>{props.indicator}</div>
      <h1 className={styles.step_title}>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Step;
