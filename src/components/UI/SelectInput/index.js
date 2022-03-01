import React from "react";
import styles from "./SelectInput.module.sass";

const SelectInput = (props) => {
  return (
    <select className={styles.select_input} onChange={props.onChange}>
      {props.data.map((item, index) => (
        <option key={`select-key-${index}`} value={item._id}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
