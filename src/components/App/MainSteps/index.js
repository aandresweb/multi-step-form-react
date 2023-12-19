import React from "react";
import "./index.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useStepsContext } from "../../../context/StepsContext";

function MainSteps() {
  const { currentStep, steps } = useStepsContext();

  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const CurrentStep = steps[currentStep];

  return (
    <div className="mainSteps">
      <div className="mainStepsWrapper" ref={parent}>
        <CurrentStep />
      </div>
    </div>
  );
}

export default MainSteps;
