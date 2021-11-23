import "./App.css";
import Tephilos from "./Components/Tephilos/Tephilos";
import Shacharis from "./Components/Tephilos/Shacharis";
//import Card from "./Components/UI/Card";
import ZemanimForDay from "./Components/Zemanim/ZemanimForDay";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import zemanimData from "./TimeFunctions/GetSunriseSunset";
import MinchaTimes from "./Components/Tephilos/MinchaTimes";

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
      <h1 className="App-header header_g "> Zemanin Kol Shimshon </h1>
      <h2 className="App-header2 header_g "> {dtHebrew.toLocaleString()} </h2>
      <div className="container ">
        <div className="shacharis_g">
          <Shacharis sunrise={zd.sunrisedt} />

          <MinchaTimes />
        </div>
        <div className="zemanim_g ">
          <ZemanimForDay
            dawn={zd.dawn}
            sunrise={zd.sunrise}
            midday={zd.midday}
            sunset={zd.sunset}
          />
        </div>
        <div className="ezemanim_g">
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
        </div>
      </div>
      <div className="shacharis_g"></div>
    </div>
  );
}

export default App;
