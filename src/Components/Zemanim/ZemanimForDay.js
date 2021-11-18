import React from "react";
import "./ZemanimForDay.css";

const ZemanimForDay = (props) => {
  return (
    <div className="zemanim">
      {/*  <div>עלות {props.dawn}</div> */}
      <div>{props.dawn} : עלות </div>
      <div>{props.sunrise} : נץ</div>
      <div>{props.midday} : חצות</div>
      <div>{props.sunset} : שקיעה </div>
    </div>
  );
};

export default ZemanimForDay;
