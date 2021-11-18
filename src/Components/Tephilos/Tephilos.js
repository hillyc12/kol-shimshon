import React from "react";
import "./Tephilos.css";
import TephiloName from "./TephiloName";
import TephiloTime from "./TephiloTime";
import MokomName from "./MokomName";
const Tephilos = (props) => {
  // const time = props.date.toLocaleTimeString();
  return (
    <div className="tephilos tephilos_g">
      <TephiloName name={props.prayer} />
      <TephiloTime time={props.time} />
      <MokomName name={"אהל יעקב"} />
    </div>
  );
};
export default Tephilos;
