import { Hours } from "./Hours";
import styles from "./WeatherForecastHours.module.css";
export function WeatherForecastHours({ hours, last_updated }) {
  return (
    <ul className={styles.HourCard}>
      {hours.map((e) => {
        if (e.time_epoch > last_updated) {
          return (
            <li className={styles.listHour} key={e.time_epoch}>
              <Hours info={e} />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}
