import { createContext, useContext, useState } from "react";

export const StepsContext = createContext();

export const StepsProvider = ({ children, initialSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(initialSteps);

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <StepsContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        steps,
        setSteps,
        nextStep,
        previousStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export const useStepsContext = () => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error("useStepsContext must be used within a StepsProvider");
  }
  return context;
};
