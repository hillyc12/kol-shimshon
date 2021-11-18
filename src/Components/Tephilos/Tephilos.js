import React from "react";
import "./Tephilos.css";
import "../UI/Card.css";
import TephiloName from "./TephiloName";
import TephiloTime from "./TephiloTime";
import MokomName from "./MokomName";
const Tephilos = (props) => {
  return (
    <div className="tephilos tephilos_g">
      <TephiloName name={props.prayer} />
      <TephiloTime time={props.time} />
      <MokomName name={props.place} />
    </div>
  );
};
export default Tephilos;
