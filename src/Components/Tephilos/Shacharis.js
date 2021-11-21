import "./Shacharis.css";
import React from "react";
import Vasikin from "./../../TimeFunctions/Vasikin";

const Shacharis = (props) => {
  const vasikinTimes = Vasikin(props.sunrise);

  return (
    <div>
      <div className="vasikin shachris_g">
        <div> </div>
        <div>שחרית</div>
      </div>
      <div className="vasikin shachris_g">
        <div className="vasikin_item"></div>
        <div className="vasikin_item">ותיקין </div>
        <div className="vasikin_item"> {vasikinTimes.brochos} </div>
        <div className="vasikin_item"> ברכות </div>
        <div className="vasikin_item"> {vasikinTimes.yeshtabach} </div>
        <div className="vasikin_item"> ישתבח</div>
        <div className="vasikin_item"> {vasikinTimes.netz} </div>
        <div className="vasikin_item"> שמונה עשרה</div>
      </div>
      <div className="vasikin shachris_g">
        <div className="vasikin_item"> 6:30/6:35 </div>
        <div className="vasikin_item"> (2) אהל יעקב </div>
        <div className="vasikin_item"> 7:00 </div>
        <div className="vasikin_item"> (3) Main בית מדרש </div>
        <div className="vasikin_item"> 7:35 </div>
        <div className="vasikin_item"> (4) בית ישראל</div>
        <div className="vasikin_item"> 8:00 </div>
        <div className="vasikin_item"> (5) Main בית מדרש </div>
        <div className="vasikin_item"> 8:30 </div>
        <div className="vasikin_item"> (6) אהל יעקב </div>
      </div>
    </div>
  );
};

export default Shacharis;
