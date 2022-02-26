import styles from "./FormTitle.module.sass";

const FormTitle = (props) => {
  return <h1 className={styles.form_title}>{props.title}</h1>;
};

export default FormTitle;
