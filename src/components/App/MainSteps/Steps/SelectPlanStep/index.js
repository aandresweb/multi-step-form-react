import React, { useEffect, useState } from "react";
import { Title, Text, SelectCard, ToggleSwitch } from "../../../../Base";
import proIcon from "../../../../../assets/images/icon-pro.svg";
import advancedIcon from "../../../../../assets/images/icon-advanced.svg";
import arcadeIcon from "../../../../../assets/images/icon-arcade.svg";
import StepActions from "../../../StepActions";
import { useFormContext } from "../../../../../context/FormContext";

import "./index.css";

function SelectPlanStep() {
  const [cardOptions, setCardOptions] = useState([
    {
      title: "Aracade",
      monthlyPriceLabel: "9/mo",
      yearlyPriceLabel: "90/yr",
      yearlyMessage: "2 months free",
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: arcadeIcon,
    },
    {
      title: "Advanced",
      monthlyPriceLabel: "12/mo",
      yearlyPriceLabel: "120/yr",
      monthlyPrice: 12,
      yearlyPrice: 120,
      yearlyMessage: "2 months free",
      icon: advancedIcon,
    },
    {
      title: "Pro",
      monthlyPriceLabel: "15/mo",
      yearlyPriceLabel: "150/yr",
      monthlyPrice: 15,
      yearlyPrice: 150,
      yearlyMessage: "2 months free",
      icon: proIcon,
    },
  ]);

  const { formData, setFormData, setFrequency } = useFormContext();

  const selectedOption = formData.selectPlan ? formData.selectPlan : {};

  const handleSelectCard = (option) => {
    setFormData({
      ...formData,
      selectPlan: option,
    });
  };

  const frequencyStatus = formData.frequency == "Monthly" ? false : true;

  return (
    <>
      <div className="step-content">
        <div className="mb-large">
          <Title>Select your plan</Title>
          <Text>You have the option of monthly or year billing.</Text>
        </div>
        <div className="form">
          <SelectCard
            selectedOption={selectedOption}
            onSelectCard={handleSelectCard}
            options={cardOptions}
            className="mb-large"
          />
          <div className="period">
            <div className="periodWrapper">
              <label className="periodLabel" htmlFor="#">
                Monthly
              </label>
              <ToggleSwitch
                onChange={setFrequency}
                defaultSelect={frequencyStatus}
              />
              <label className="periodLabel" htmlFor="#">
                Yearly
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="step-bottom">
        <StepActions />
      </div>
    </>
  );
}

export default SelectPlanStep;
