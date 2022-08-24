import styles from "./Days.module.css";

export function Days({ info }) {
  const infoDay = {
    text: info.day.condition.text,
    icon: info.day.condition.icon,
    celsius: info.day.avgtemp_c,
    date: info.date,
  };

  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const Day = new Date(infoDay.date);
  const number = Day.getDay();
  console.log(days[number + 1]);

  return (
    <div className={styles.card}>
      <p>{days[number + 1]}</p>
      <img src={infoDay.icon} alt={infoDay.text} />
      <p> {infoDay.celsius} C° </p>
    </div>
  );
}
