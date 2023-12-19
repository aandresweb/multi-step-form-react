import React from "react";
import { Button, Text, Title } from "../../../../Base";
import "./index.css";
import StepActions from "../../../StepActions";
import { useFormContext } from "../../../../../context/FormContext";

function SummaryStep() {
  const { formData, getTotalFormData, setFrequency } = useFormContext();

  const { frequency } = formData;

  const handleChangeFrequency = () => {
    setFrequency(frequency == "Monthly" ? 0 : 1);
  };

  const { selectPlan, pickAddOn } = formData;

  return (
    <>
      <div className="step-content">
        <div className="mb-large">
          <Title>Finishing up</Title>
          <Text>Double-check everything looks OK before confirming.</Text>
        </div>
        <div className="summary">
          <div className="summary-main">
            <div className="summary-row">
              <div>
                <p className="summary-text bold">
                  {selectPlan.title} ({frequency})
                </p>
                <a
                  className="summary-button"
                  href="#"
                  onClick={handleChangeFrequency}
                >
                  Change
                </a>
              </div>
              <div>
                <p className="summary-price bold">
                  $
                  {frequency == "Monthly"
                    ? selectPlan.monthlyPriceLabel
                    : selectPlan.yearlyPriceLabel}
                </p>
              </div>
            </div>

            {pickAddOn.map((item, index) => {
              return (
                <div className="summary-row" key={index}>
                  <div>
                    <Text>{item.title}</Text>
                  </div>
                  <div>
                    <p className="summary-price">
                      $
                      {frequency == "Monthly"
                        ? item.monthlyPriceLabel
                        : item.yearlyPriceLabel}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary-total">
            <div>
              <Text>
                Total (per {frequency == "Monthly" ? "month" : "year"})
              </Text>
            </div>
            <div>
              <p className="summary-total-price bold">
                +${getTotalFormData()}/{frequency == "Monthly" ? "mo" : "yr"}
              </p>
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

export default SummaryStep;
