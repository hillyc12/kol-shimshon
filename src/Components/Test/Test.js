import React from "react";

const Test = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const time = props.date.toTimeString();
  return (
    <div>
      <h2>
        {" "}
        {month} {day}, {year}: {time}
      </h2>
    </div>
  );
};

export default Test;
