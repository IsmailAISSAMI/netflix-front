import styles from "./StepTable.module.sass";

const StepTable = (props) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td></td>
          <td className={styles.radio}>
            <input
              type="radio"
              name="input_radio"
              className={styles.input_radio}
              checked={props.plan === "basic"}
              value="basic"
              id="basic"
              onChange={() => props.setPlan("basic")}
            />
            <label htmlFor="basic">Basic</label>
          </td>
          <td className={styles.radio}>
            <input
              type="radio"
              name="input_radio"
              className={styles.input_radio}
              checked={props.plan === "standard"}
              value="standard"
              id="standard"
              onChange={() => props.setPlan("standard")}
            />
            <label htmlFor="standard">Standard</label>
          </td>
          <td className={styles.radio}>
            <input
              type="radio"
              name="input_radio"
              className={styles.input_radio}
              checked={props.plan === "premium"}
              value="premium"
              id="premium"
              onChange={() => props.setPlan("premium")}
            />
            <label htmlFor="premium">Premium</label>
          </td>
        </tr>
        <tr>
          <td>Monthly price</td>
          <td>EUR8.99</td>
          <td>EUR13.49</td>
          <td>EUR17.99</td>
        </tr>
        <tr>
          <td>Video quality</td>
          <td>Good</td>
          <td>Better</td>
          <td>Best</td>
        </tr>
        <tr>
          <td>Resolution</td>
          <td>480p</td>
          <td>1080p</td>
          <td>4K+HDR</td>
        </tr>
        <tr>
          <td>Watch on your TV, computer, mobile phone and tablet</td>
          <td>
            <span>Yes</span>
          </td>
          <td>
            <span>Yes</span>
          </td>
          <td>
            <span>Yes</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StepTable;
