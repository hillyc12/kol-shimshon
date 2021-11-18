import "./App.css";
import Tephilos from "./Components/Tephilos/Tephilos";
import Shacharis from "./Components/Tephilos/Shacharis";
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
    <div>
      <h1 className="App-header"> Zemanin Kol Shimshon </h1>
      <h2 className="App-header2"> {dtHebrew.toLocaleString()} </h2>
      <div>
        <Card>
          <ZemanimForDay
            dawn={zd.dawn}
            sunrise={zd.sunrise}
            midday={zd.midday}
            sunset={zd.sunset}
          />
          <Shacharis sunrise={zd.sunrisedt} />
          <Tephilos
            time={"6:30 / 6:35"}
            prayer={"2nd שחרית"}
            place={"אהל יעקב"}
          />
          <Tephilos
            time={"7:00"}
            prayer={"3rd שחרית"}
            place={"Main בית מדרש"}
          />
          <Tephilos time={"7:35"} prayer={"4th שחרית"} place={"בית ישראל"} />
          <Tephilos
            time={"8:00"}
            prayer={"5th שחרית"}
            place={"Main בית מדרש"}
          />
          <Tephilos time={"8:30"} prayer={"6th שחרית"} place={"אהל יעקב"} />
          <Tephilos
            time={zd.earliestMincha}
            prayer={"Earliest מנחה"}
            place={"אהל יעקב"}
          />
          <Tephilos
            time={zd.earliestMariv}
            prayer={"Earliest מעריב"}
            place={"אהל יעקב"}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
