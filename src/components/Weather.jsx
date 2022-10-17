import { WeatherCurrent } from "./WeatherCurrent";
import { WeatherForecastDays } from "./WeatherForecastDays";
import { WeatherForecastHours } from "./WeatherForecasHours";
import styles from "./Weather.module.css";
import mundo from "../assets/mundo.png";
export function Weather({ info }) {
  console.log(info);
  if (info.length !== 0 && info !== undefined) {
    const info_current = {
      text: info.current.condition.text,
      icon: info.current.condition.icon,
      celsius: info.current.temp_c,
      name: info.location.name,
      hour: info.location.localtime.slice(11),
      lastUpdated: info.current.last_updated_epoch,
    };
    const info_forescasthours = info.forecast.forecastday[0].hour;
    const info_forescastdays = info.forecast.forecastday;

    return (
      <div className={styles.containerInfo}>
        <WeatherCurrent current={info_current} />
        <WeatherForecastHours
          hours={info_forescasthours}
          last_updated={info_current.lastUpdated}
        />
        <WeatherForecastDays
          days={info_forescastdays}
          current={info.current.last_updated}
        />
      </div>
    );
  }
  return (
    <div className={styles.containerImg}>
      <img src={mundo} alt="mundo" className={styles.img} />
    </div>
  );
}
