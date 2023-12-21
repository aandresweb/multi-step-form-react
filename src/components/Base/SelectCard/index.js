import React, { useEffect, useId, useState } from "react";

import "./index.css";
import { useFormContext } from "../../../context/FormContext";

function SelectCard({ className, options, onSelectCard, selectedOption }) {
  const selected = selectedOption?.index ? selectedOption?.index : 0;

  const [selectCardOptions, setSelectCardOptions] = useState(options);
  const [activeIndex, setActiveIndex] = useState(selected);
  const { formData } = useFormContext();
  const { frequency } = formData;

  const handleSelectCardOption = (cardOption, index) => {
    onSelectCard({
      ...cardOption,
      index,
    });
    setActiveIndex(index);
  };

  const checkIsActive = (index) => {
    return index === activeIndex;
  };

  let OptionItem = ({ item, index }) => {
    const { title, monthlyPriceLabel, yearlyPriceLabel, icon, yearlyMessage } =
      item;

    const priceOption =
      frequency == "Monthly" ? monthlyPriceLabel : yearlyPriceLabel;
    const yearlyMessageOption = frequency == "Monthly" ? "" : yearlyMessage;

    return (
      <div
        className={`${className} optionItem ${
          checkIsActive(index) ? "active" : ""
        }`}
        onClick={() => handleSelectCardOption(item, index)}
      >
        <div className="optionItemWrapper">
          <div className="selecPlanOption">
            <img className="selectPlanOptionImg" src={icon} alt="" />
            <div className="selectPlanOptionBody">
              <p className="selectPlanOptionTitle">{title}</p>
              <p className="selectPlanOptionPrice">${priceOption}</p>
              <p className="selectPlanOptionYearlyMessage">
                {yearlyMessageOption}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="selectCard">
      <div className="selectCardWrapper">
        {options?.map((item, index) => {
          return <OptionItem key={index} index={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default SelectCard;
