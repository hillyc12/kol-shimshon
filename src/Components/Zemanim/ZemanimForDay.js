import React from "react";
import "./ZemanimForDay.css";
import zemanimData from "../../TimeFunctions/GetSunriseSunset";

const zd = zemanimData();
console.log(zd);
const ZemanimForDay = (props) => {
  return (
    <div className="zemanim">
      <div>עלות: </div>
    </div>
  );
};

export default ZemanimForDay;
