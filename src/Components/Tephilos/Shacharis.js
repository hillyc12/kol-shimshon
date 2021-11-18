import "./Shacharis.css";
import "../UI/Card.css";
import React from "react";
import Vasikin from "./../../TimeFunctions/Vasikin";

const Shacharis = (props) => {
  const vasikinTimes = Vasikin(props.sunrise);

  return (
    <div className="vasikin shachris_g">
      <div className="vasikin_item">ותיקין </div>
      <div className="vasikin_item"> : </div>
      <div className="vasikin_item"> ברכות </div>
      <div className="vasikin_item"> {vasikinTimes.brochos} </div>
      <div className="vasikin_item"> ישתבח</div>
      <div className="vasikin_item"> {vasikinTimes.yeshtabach} </div>
      <div className="vasikin_item"> שמונה עשרה</div>
      <div className="vasikin_item"> {vasikinTimes.netz} </div>
    </div>
  );
};

export default Shacharis;
