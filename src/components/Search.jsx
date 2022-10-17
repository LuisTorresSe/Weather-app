import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { Api } from "../utils/api";
import styles from "./Search.module.css";

export function Search({ setinfo }) {
  const [city, setCity] = useState("");
  const debounce = useDebounce(city, 800);

  useEffect(() => {
    if (debounce.length !== "") {
      const request = Api(debounce);
      console.log(request);
      if (request === undefined) {
        return null;
      }
      setinfo(request);
    }
  }, [setinfo, debounce]);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={HandleSubmit} className={styles.form}>
      <label className={styles.formLabel} name="search">
        Enter city
      </label>
      <input
        id="search"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        value={city}
        type="text"
        className={styles.formInput}
      />
    </form>
  );
}
