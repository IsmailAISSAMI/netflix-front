import React, { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./item.module.sass";


const Item = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.accordion_item}>
      <button onClick={() => setShow(!show)}>
        {props.accordion.header}
        {show ? (
          <Icon className={styles.icon} icon="clarity:close-line" />
        ) : (
          <Icon className={styles.icon} icon="fluent:add-28-regular" />
        )}
      </button>
      {show ? (
        <div className={styles.accordion_item_body}>{props.accordion.body}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Item;
