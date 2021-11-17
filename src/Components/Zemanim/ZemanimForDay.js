import React, { useEffect, useState } from "react";
import "./ZemanimForDay.css";
import zemanimData from "../../TimeFunctions/GetSunriseSunset";

const ZemanimForDay = (props) => {
  const [zd, setZd] = useState({});

  useEffect(() => {
    zemanimData().then((data) => setZd(data));
  }, []);

  return (
    <div className="zemanim">
      <div>עלות: {zd.dawn}</div>
      <div>נץ: {zd.sunrise}</div>
      <div>חצות: {zd.midday} </div>
      <div>שקיעה: {zd.sunset} </div>
    </div>
  );
};

export default ZemanimForDay;
