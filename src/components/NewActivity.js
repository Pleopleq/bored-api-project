import React, { useState } from "react";
import DisplayActivity from "./DisplayActivity";
import Options from "./Options";

const NewActivity = () => {
  const [newActivity, setNewActivity] = useState([]);
  const [activityTheme, setActivityTheme] = useState("");
  const typeOfActivity = [
    "all",
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const handleButton = () => {
    const URL = `http://www.boredapi.com/api/activity?type=${activityTheme}`;
    fetch(URL)
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => setNewActivity(response));
  };

  const handleDisplay = () => {
    if (newActivity.length === 0) {
      return [];
    } else {
      return (
        <DisplayActivity
          activity={newActivity.activity}
          type={newActivity.type}
          link={newActivity.link}
        ></DisplayActivity>
      );
    }
  };

  const handleTypeOfActivity = (e) => {
    let name = e.target.value;
    if (name === "all") {
      name = "";
    }
    setActivityTheme(name);
  };

  const handleOptions = () => {
    return typeOfActivity.map((option) => (
      <Options value={option} name={option} key={option} />
    ));
  };

  return (
    <div className={"blockApp"}>
      <button className={"blockApp__button"} onClick={handleButton}>
        find me something to do
      </button>
      <select className={'blockApp__selector'} value={activityTheme} onChange={handleTypeOfActivity}>

        {handleOptions()}

      </select>
      {handleDisplay()}
    </div>
  );
};

export default NewActivity;
