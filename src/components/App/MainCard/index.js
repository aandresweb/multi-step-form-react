import React from "react";
import "./index.css";
import Sidebar from "./../Sidebar";
import MainSteps from "../MainSteps";
import StepActions from "../StepActions";

function MainCard() {
  return (
    <div className="mainCard">
      <Sidebar />
      <MainSteps />
      <div className="stepActionsResponsive">
        <StepActions />
      </div>
    </div>
  );
}

export default MainCard;
