import React from "react";
import Item from "./Item";
import Signup from "../UI/Button/Signup/Signup";
import accordionData from "../../data/accordion.data";
import styles from "./accordion.module.sass";

const Accordion = () => {
  return (
    <div className={styles.accordion}>
      <h1>Frequently Asked Questions</h1>
      {accordionData.map((content, index) => {
        return <Item key={index}  accordion={content} />;
      })}
      <Signup />
    </div>
  );
};

export default Accordion;
