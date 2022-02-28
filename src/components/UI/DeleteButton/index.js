import styles from "./DeleteButton.module.sass";

const Index = (props) => {
  return (
    <button className={styles.delete_button} onClick={props.onClick}>
      delete
    </button>
  );
};
export default Index;
