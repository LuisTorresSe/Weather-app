import styles from "./WeatherCurrent.module.css";
export function WeatherCurrent({ current }) {
  return (
    <div className={styles.cardCurrent}>
      <strong className={styles.name}> {current.name}</strong>
      <p className={styles.textCondition}>{current.text}</p>
      <p className={styles.Celsius}>{current.celsius} C°</p>
      <img src={current.icon} alt={current.text} width="100px" height="100px" />
    </div>
  );
}
