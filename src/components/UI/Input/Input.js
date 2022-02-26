import React from "react";
import styles from "./Input.module.sass";

const Input = (props) => {
    return (
        <div className={styles.form_input}>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Input;