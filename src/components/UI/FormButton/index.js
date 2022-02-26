import styles from "./FormButton.module.sass";

const FormButton = (props) => {
  return (
    <button
      className={styles.form_button}
      type="submit"
      autoComplete="off"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default FormButton;
