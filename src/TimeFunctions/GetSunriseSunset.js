import { DateTime } from "luxon";

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
  const sunrise = zemaniimJson.results.sunrise;
  const sunset = zemaniimJson.results.sunset;
  const sunriseLocal = new DateTime.fromISO(sunrise, {
    zone: "America/New_York",
  });
  const alosLocall = new DateTime.fromISO(sunrise, {
    zone: "America/New_York",
  }).plus({ minutes: -72 });

  const tod = sunriseLocal.toLocaleString(DateTime.DATE_SHORT);
  const sunriseStr = sunriseLocal.toLocaleString(DateTime.TIME_SIMPLE);
  const alosStr = alosLocall.toLocaleString(DateTime.TIME_SIMPLE);

  const sunsetLocal = new DateTime.fromISO(sunset, {
    zone: "America/New_York",
  });

  const halfDay = sunsetLocal.diff(sunriseLocal) / 2;
  const halachikHour = sunsetLocal.diff(sunriseLocal) / 12;
  const halachikHalfHour =
    sunsetLocal.diff(sunriseLocal) / 24 > 1800000
      ? sunsetLocal.diff(sunriseLocal) / 24
      : 1800000;

  const chattzos = new DateTime.fromISO(sunrise, {
    zone: "America/New_York",
  }).plus({ milliseconds: halfDay });
  const earliestMincha = new DateTime(chattzos).plus({
    milliseconds: halachikHalfHour,
  });
  // findout how many minutes to add to sunset for earliest mariv round up
  const rndMariv = 5 - (sunsetLocal.minute % 5) + 45;

  const earliestMariv = new DateTime(sunsetLocal).plus({
    minutes: rndMariv,
  });

  const earliestMarivStr = earliestMariv.toLocaleString(DateTime.TIME_SIMPLE);
  const earliestMinchaStr = earliestMincha.toLocaleString(DateTime.TIME_SIMPLE);
  const halachikHourStr = halachikHour.toLocaleString(DateTime.TIME_SIMPLE);
  const sunsetStr = sunsetLocal.toLocaleString(DateTime.TIME_SIMPLE);
  const chattzosStr = chattzos.toLocaleString(DateTime.TIME_SIMPLE);

  const zemanimForDay = {
    date: tod,
    dawn: alosStr,
    sunrise: sunriseStr,
    midday: chattzosStr,
    sunset: sunsetStr,
    earliestMincha: earliestMinchaStr,
    halachikHour: halachikHourStr,
    earliestMariv: earliestMarivStr,
    sunrisedt: sunrise,
  };
  return zemanimForDay;
};

export default zemanimData;
