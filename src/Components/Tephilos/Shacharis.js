import "./Shacharis.css";
import React from "react";
import Vasikin from "./../../TimeFunctions/Vasikin";

const Shacharis = (props) => {
  const vasikinTimes = Vasikin(props.sunrise);

  return (
    <div>
      <h1 className="vasikin vasikin_name">שחרית</h1>
      <div className="vasikin shachris_g">
        <div className="vaikin_item"></div>
        <h3 className="vasikin_item">ותיקין </h3>
        <div className="vasikin_item"> {vasikinTimes.brochos} </div>
        <div className="vasikin_item"> ברכות </div>
        <div className="vasikin_item"> {vasikinTimes.yeshtabach} </div>
        <div className="vasikin_item"> ישתבח</div>
        <div className="vasikin_item"> {vasikinTimes.netz} </div>
        <div className="vasikin_item"> שמונה עשרה</div>
      </div>
      <div className="vasikin shachris_g">
        <div className="vasikin_item"> 6:30/6:35 </div>
        <div className="vasikin_item"> אהל יעקב </div>
        <div className="vasikin_item"> 7:00 </div>
        <div className="vasikin_item">Main בית מדרש </div>
        <div className="vasikin_item"> 7:35 </div>
        <div className="vasikin_item">בית ישראל</div>
        <div className="vasikin_item"> 8:00 </div>
        <div className="vasikin_item">Main בית מדרש </div>
        <div className="vasikin_item"> 8:30 </div>
        <div className="vasikin_item"> אהל יעקב </div>
        <div className="vasikin_item"> 8:50 </div>
        <div className="vasikin_item">בית ישראל</div>
      </div>
    </div>
  );
};

export default Shacharis;
