const API=process.env.REACT_APP_API
const TOKEN=process.env.REACT_APP_TOKEN

export function Api(city){
    return (fetch(`${API}&key=${TOKEN}&q=${city}&days=3&aqi=no&alerts=no`).then(res => res.json()));
    
}