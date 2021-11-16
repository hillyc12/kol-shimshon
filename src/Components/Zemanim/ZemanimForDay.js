import React, { useState } from "react";
import "./ZemanimForDay.css";
import zemanimData from "../../TimeFunctions/GetSunriseSunset";

const ZemanimForDay = (props) => {
  const [zd, zdr] = useState(zemanimData());
  console.log(zd);
  console.log(zdr);
  return (
    <div className="zemanim">
      <div>עלות: {JSON.stringify(zd.dawn)} </div>
    </div>
  );
};

export default ZemanimForDay;
