const API = process.env.REACT_APP_API;
const TOKEN = process.env.REACT_APP_TOKEN;

export async function Api(city) {
  const request = await fetch(
    `${API}&key=${TOKEN}&q=${city}&days=3&aqi=no&alerts=no`
  );
  const json = await request.json();
  const a = "asda";
  return json;
}
