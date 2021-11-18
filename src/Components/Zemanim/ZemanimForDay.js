import React from "react";
import "./ZemanimForDay.css";
import "../UI/Card.css";

const ZemanimForDay = (props) => {
  return (
    <div className="zemanim zemanim_g">
      <div>{props.dawn} : עלות </div>
      <div>{props.sunrise} : נץ</div>
      <div>{props.midday} : חצות</div>
      <div>{props.sunset} : שקיעה </div>
    </div>
  );
};

export default ZemanimForDay;
