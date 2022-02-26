import React from 'react';
import styles from "./index.module.scss";

const Step = (props) => {
  return (
    <div className={styles.step}>
        {
            props.image?
            <img
          src={props.image.src}
          alt={props.image.alt}
          className={styles.step_image}
        />: 
        <></>
        }
        <div className={styles.step_indicator}>{props.indicator}</div>
        <h1 className={styles.step_title}>{props.title}</h1>
        {
            props.children
        }
      </div>
  )
}

export default Step