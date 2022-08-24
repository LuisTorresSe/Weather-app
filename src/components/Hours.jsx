import styles from "./Hours.module.css";
export function Hours({ info }) {
  const infoHour = {
    text: info.condition.text,
    icon: info.condition.icon,
    celsius: info.temp_c,
    hour: info.time.slice(11),
  };
  return (
    <div className={styles.Card}>
      <p>{infoHour.hour}</p>
      <img src={infoHour.icon} alt={infoHour.text} />
      <p>{infoHour.text}</p>
    </div>
  );
}
