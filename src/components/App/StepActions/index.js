import React from "react";
import { useStepsContext } from "../../../context/StepsContext";
import { Button } from "../../Base";

function StepActions({ nextStepAction }) {
  const { currentStep, steps, previousStep, nextStep } = useStepsContext();

  const handleNextStep = () => {
    if (typeof nextStepAction == "undefined") {
      return nextStep();
    }

    if (nextStepAction()) {
      nextStep();
    }
  };

  return (
    <div className="stepActions flex space-between">
      {currentStep > 0 && (
        <Button className="align-left outline" onClick={previousStep}>
          Go back
        </Button>
      )}
      {currentStep < steps.length - 1 && (
        <Button className="align-right" onClick={handleNextStep}>
          Next Step
        </Button>
      )}
    </div>
  );
}

export default StepActions;
