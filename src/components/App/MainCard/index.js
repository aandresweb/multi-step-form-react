import React from "react";
import "./index.css";
import Sidebar from "./../Sidebar";
import MainSteps from "../MainSteps";

function MainCard() {
  return (
    <div className="mainCard">
      <Sidebar />
      <MainSteps />
    </div>
  );
}

export default MainCard;
