const zemanimData = async () => {
  const response = await fetch(
    "https://api.sunrise-sunset.org/json?lat=40.10256&lng=-74.209786&date=today&formatted=0"
  );
  //const td = new Date();
  //const tomorrow = new Date(td.setDate(td.getDate() + 1));
  /* const tomorrowString = `${tomorrow.getFullYear()}-${
    tomorrow.getMonth() + 1
  }-${tomorrow.getDate()}`;
 */
  /* const response2 = await fetch(
    `https://api.sunrise-sunset.org/json?lat=40.10256&lng=-74.209786&date=${tomorrowString}`
  ); */

  const zemaniimJson = await response.json();
  //const zemaniim2Json = await response2.json();
  const sunrise = zemaniimJson.results.sunrise;
  const sunset = zemaniimJson.results.sunset;
  const sd = new Date(sunrise);
  const sunriseLocal = new Date(sunrise);
  const alosLocal = new Date(sd.setMinutes(sd.getMinutes() - 72));
  const sunsetLocal = new Date(sunset);

  const sunriseStr = ExtractTime(sunriseLocal);
  const timeInDay = sunsetLocal - sunriseLocal;
  const halfDay = Number(timeInDay) / 2;
  const chattzos = new Date(
    sunriseLocal.setMilliseconds(
      sunriseLocal.getUTCMilliseconds() + Number(halfDay)
    )
  );
  const tod = sunriseLocal.getDate();
  const alosStrg = ExtractTime(alosLocal);
  const sunsetStr = ExtractTime(sunsetLocal);
  const chattzosStr = ExtractTime(chattzos);
  const zemanimForDay = {
    date: tod,
    dawn: alosStrg,
    sunrise: sunriseStr,
    midday: chattzosStr,
    sunset: sunsetStr,
  };
  return zemanimForDay;
};

const ExtractTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let hr = hours;
  if (hours > 12) {
    hr = hours - 12;
  } else {
    hr = hours;
  }
  return `${hr}:${minutes}:${seconds}`;
};
export default zemanimData;
