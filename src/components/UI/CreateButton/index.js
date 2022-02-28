import { Icon } from '@iconify/react';
import styles from "./CreateButton.module.sass";

const Index = (props) => {
  return (
    <button className={styles.create_button} onClick={props.onClick}>
      <Icon icon="carbon:add-filled" className={styles.icon} />
      {props.label}
    </button>
  );
};
export default Index;
