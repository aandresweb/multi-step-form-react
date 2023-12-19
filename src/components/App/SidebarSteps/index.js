import React from "react";
import "./index.css";
import { useStepsContext } from "../../../context/StepsContext";

function SidebarSteps() {
  const { currentStep } = useStepsContext();

  const SidebarStep = ({ number, title }) => {
    const isCurrentStep = (step) => step === currentStep;

    return (
      <div className="sidebarStep">
        <div className="sidebarStepWrapper">
          <div
            className={`sidebarStepNumber ${
              isCurrentStep(number - 1) ? "active" : ""
            }`}
          >
            <span>{number}</span>
          </div>
          <div className="sidebarStepInfo">
            <span className="sidebarStepInfoStep">Step {number}</span>
            <span className="sidebarStepInfoTitle">{title}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sidebarStepsWrapper">
      <SidebarStep number={1} title="Your Info" />
      <SidebarStep number={2} title="Select Plan" />
      <SidebarStep number={3} title="Add-Ons" />
      <SidebarStep number={4} title="Summary" />
    </div>
  );
}

export default SidebarSteps;
