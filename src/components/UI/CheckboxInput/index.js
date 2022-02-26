import React from "react";
import styles from "./CheckboxInput.module.sass";

const CheckboxInput = (props) => {
  return (
    <div className={styles.checkbox_input}>
      <label htmlFor="checkbox">{props.label}</label>
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default CheckboxInput;
