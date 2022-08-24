import { Days } from "./Days";
import styles from "./WeatherForecastDays.module.css";
export function WeatherForecastDays({ days, current }) {
  return (
    <ul className={styles.cardDay}>
      {days.map((e) => {
        if (e.date !== current.slice(0, 10)) {
          return (
            <li key={e.date_epoch}>
              <Days info={e} />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}
