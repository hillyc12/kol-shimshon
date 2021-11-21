import "./App.css";
import Tephilos from "./Components/Tephilos/Tephilos";
import Shacharis from "./Components/Tephilos/Shacharis";
//import Card from "./Components/UI/Card";
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
      <h1 className="App-header header_g "> Zemanin Kol Shimshon </h1>
      <h2 className="App-header2 header_g "> {dtHebrew.toLocaleString()} </h2>
      <div className="container ">
        <div className="shacharis_g">
          {" "}
          <Shacharis sunrise={zd.sunrisedt} />{" "}
        </div>
        <div className="zemanim_g ">
          <ZemanimForDay
            dawn={zd.dawn}
            sunrise={zd.sunrise}
            midday={zd.midday}
            sunset={zd.sunset}
          />
        </div>
        <div className="tehphilos_g">
          {/* <Tephilos
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
          <Tephilos time={"8:30"} prayer={"6th שחרית"} place={"אהל יעקב"} /> */}
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
    </div>
  );
}

export default App;
