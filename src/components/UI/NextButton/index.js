import React from "react";
import styles from "./NextButton.module.sass";

const NextButton = (props) => {
  return (
      <button className={styles.next_button} onClick={props.onClick}>
        Next
      </button>
  );
};

export default NextButton;
