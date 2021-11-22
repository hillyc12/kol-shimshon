import minchaZemanin from "../Zemanim/minchaTimes";
import React from "react";
import "./MinchaTimes.css";

const MinchaTimes = () => {
  const mt = minchaZemanin();

  const mt2 = mt.map((e) => (
    <>
      {" "}
      <div> {e.place} </div> <div> {e.time} </div>{" "}
    </>
  ));

  return (
    <div>
      <h2 className="mincha_name"> מנחה</h2>
      <div className="mincha">{mt2}</div>
    </div>
  );
};

export default MinchaTimes;
