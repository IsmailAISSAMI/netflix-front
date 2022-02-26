import Signup from "../UI/Button/Signup/Signup";
import styles from "./Feature.module.sass";

const Feature = () => {
    return <div className={styles.feature}>
        <h1 className={`${styles.feature_title} ${styles.feature_title_h1}`}>Unlimited movies, TV shows, and more.</h1>
        <h2 className={`${styles.feature_title} ${styles.feature_title_h2}`}>Watch anywhere. Cancel anytime.</h2>
        <h4 className={`${styles.feature_title} ${styles.feature_title_h3}`}>Ready to watch? Enter your email to create or restart your membership.</h4>
        <Signup />
    </div>
};

export default Feature;