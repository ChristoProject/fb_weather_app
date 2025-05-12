export function time_converter(dt) {
  let timestamp = dt;
  let date = new Date(timestamp * 1000);
  let hour = date.getHours();
  let minute = date.getMinutes();

  formatted_date = `${hour}:${minute}0`;
  return formatted_date;
}


export function getDay(ts) {
  const week_day = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
  let timestamp = ts;
  let date = new Date(timestamp * 1000);
  let day = week_day[date.getDay()];
  
  return day;
}
