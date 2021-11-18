import "./App.css";
import Tephilos from "./Components/Tephilos/Tephilos";
import Card from "./Components/UI/Card";
import ZemanimForDay from "./Components/Zemanim/ZemanimForDay";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import zemanimData from "./TimeFunctions/GetSunriseSunset";

const dtHebrew = DateTime.now()
  .setZone("America/New_York")
  .reconfigure({ outputCalendar: "hebrew" });

function App() {
  const [zd, setZd] = useState({});

  useEffect(() => {
    zemanimData().then((data) => setZd(data));
  }, []);
  return (
    <Card>
      <h1 className="App-header"> Zemanin Kol Shimshon </h1>
      <h2 className="App-header2"> {dtHebrew.toLocaleString()} </h2>
      <ZemanimForDay
        dawn={zd.dawn}
        sunrise={zd.sunrise}
        midday={zd.midday}
        sunset={zd.sunset}
      />
      <Tephilos time={zd.earliestMincha} prayer={"Earliest מנחה"} />
      <Tephilos time={zd.earliestMariv} prayer={"Earliest מעריב"} />
    </Card>
  );
}

export default App;
