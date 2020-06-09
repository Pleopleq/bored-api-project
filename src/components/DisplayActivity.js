import React from "react";

const DisplayActivity = (props) => {
  const handleLink = () => {
    if (props.link !== "") {
      return (
        <p className={"blockApp__display-type"}>
          Link: <a href={props.link}>{props.link}</a>
        </p>
      );
    } else {
      return "";
    }
  };

  return (
    <div className={"blockApp__display"}>
      <h2 className={"blockApp__display-main"}>{props.activity}</h2>
      <p className={"blockApp__display-type"}>{props.type}</p>
      {handleLink()}
    </div>
  );
};

export default DisplayActivity;
