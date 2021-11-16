import React from "react";
import "./Tephilos.css";
import TephiloName from "./TephiloName";
import TephiloTime from "./TephiloTime";
const Tephilos = (props) => {
  const time = props.date.toLocaleTimeString();
  const tephilo = "מעריב";
  return (
    <div className="tephilos tephilos_g">
      <TephiloName name={tephilo} />
      <TephiloTime time={time} />
    </div>
  );
};
export default Tephilos;
