import styles from "./MonitoringTable.module.sass";

const Index = ({ header, children }) => {
  return (
    <table className={styles.monitoring_table}>
      <thead>
        <tr>
          {header.map((element, key) => {
            return <td key={`td-key-${key}`}>{element}</td>;
          })}
        </tr>
      </thead>
      {
        children
      }
      <tfoot></tfoot>
    </table>
  );
};
export default Index;
