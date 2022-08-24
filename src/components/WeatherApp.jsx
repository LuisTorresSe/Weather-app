import { Search } from "./Search";
import { Weather } from "./Weather";
import style from "./WeatherApp.module.css";
import { useState } from "react";
export function WeatherApp() {
  const [info, setinfo] = useState([]);

  return (
    <div className={style.containerApp}>
      <Search setinfo={setinfo} />
      <Weather info={info} />
    </div>
  );
}
