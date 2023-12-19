import React from "react";
import { MainCard } from "../App";
import "./index.css";
import { StepsProvider } from "../../context/StepsContext";
import {
  PersonalInfoStep,
  PickAddOnsStep,
  SelectPlanStep,
  SummaryStep,
  ThankyouStep,
} from "../App/MainSteps/Steps";
import { FormProvider } from "../../context/FormContext";

function Root() {
  const steps = [
    () => <PersonalInfoStep />,
    () => <SelectPlanStep />,
    () => <PickAddOnsStep />,
    () => <SummaryStep />,
    () => <ThankyouStep />,
  ];
  return (
    <div className="main">
      <FormProvider>
        <StepsProvider initialSteps={steps}>
          <MainCard />
        </StepsProvider>
      </FormProvider>
    </div>
  );
}

export default Root;
