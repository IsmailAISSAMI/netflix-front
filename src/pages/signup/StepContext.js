import styles from "./StepContext.module.sass"

const StepContext = (props)=>{
    return(
        <div className={styles.step_context}>
            {props.context}
        </div>
    );
}

export default StepContext; 