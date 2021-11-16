const zemanimData = async () => {
  const response = await fetch(
    "https://api.sunrise-sunset.org/json?lat=40.10256&lng=-74.209786&date=2021-11-15"
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
  /* console.log(`Resonse1: ${zemaniimJson.results.sunrise}`);
  console.log(`Resonse2: ${zemaniim2Json.results.sunrise}`); */
  const [hour, min, scnd] = sunrise.split(":");
  const [second] = scnd.split(" ");
  const tod = new Date();
  const month = tod.getMonth();
  const year = tod.getFullYear();
  const day = tod.getDate();
  const sd = new Date(year, month, day, hour, min, second);

  const sunriseLocal = new Date(sd.setHours(sd.getHours() - 5));
  const alosLocal = new Date(sd.setMinutes(sd.getMinutes() - 72));
  const [shour, smin, sscnd] = sunset.split(":");
  const shour12 = Number(shour) + 12;

  const [ssecond] = sscnd.split(" ");

  const ss = new Date(year, month, day, shour12, smin, ssecond);
  const sunsetLocal = new Date(ss.setHours(ss.getHours() - 5));

  //console.log(`Netz: ${sunriseLocal}`);
  //console.log(`Alos: ${alosLocal}`);
  //console.log(`Shkiah: ${sunsetLocal}`);

  const timeInDay = sunsetLocal - sunriseLocal;
  const halfDay = Number(timeInDay) / 2;

  const chattzos = new Date(
    sunriseLocal.setMilliseconds(
      sunriseLocal.getUTCMilliseconds() + Number(halfDay)
    )
  );
  const zemanimForDay = {
    date: tod,
    dawn: alosLocal,
    sunrise: sunriseLocal,
    midday: chattzos,
    sunset: sunsetLocal,
  };
  //console.log(`chatzos: ${chattzos}`);

  return zemanimForDay;
};
export default zemanimData;
