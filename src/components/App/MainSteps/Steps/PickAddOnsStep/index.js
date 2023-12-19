import React from "react";
import { Title, Text, Input, Button, SelectCard } from "../../../../Base";
import "./index.css";
import SelectCardsVertical from "../../../../Base/SelectCardsVertical";
import StepActions from "../../../StepActions";
import { useFormContext } from "../../../../../context/FormContext";

function PickAddOnsStep() {
  const { formData, setFormData } = useFormContext();

  const selectedOptions = formData.pickAddOn ? formData.pickAddOn : [];

  const handleSelectCard = (data) => {
    setFormData({
      ...formData,
      pickAddOn: data,
    });
  };

  const options = [
    {
      title: "Online Service",
      description: "Access to multiplayer games",
      monthlyPriceLabel: "1/mo",
      yearlyPriceLabel: "10/yr",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      title: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyPriceLabel: "2/mo",
      yearlyPriceLabel: "20/yr",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPriceLabel: "2/mo",
      yearlyPriceLabel: "20/yr",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  return (
    <>
      <div className="step-content">
        <div className="mb-large">
          <Title>Pick Add Ons</Title>
          <Text>Add-ons help enhance your gaming experience</Text>
        </div>
        <div className="form">
          <SelectCardsVertical
            selectedOptions={selectedOptions}
            options={options}
            onSelectCard={handleSelectCard}
          />
        </div>
      </div>
      <div className="step-bottom">
        <StepActions />
      </div>
    </>
  );
}

export default PickAddOnsStep;
