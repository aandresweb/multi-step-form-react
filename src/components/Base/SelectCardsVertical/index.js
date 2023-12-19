import React, { useState } from "react";
import Text from "../Text";
import arcadeIcon from "../../../assets/images/icon-checkmark.svg";

import "./index.css";
import { useFormContext } from "../../../context/FormContext";

function SelectCardsVertical({ selectedOptions, options, onSelectCard }) {
  const [cardOptions, setCardOptions] = useState(options);
  const [selectedCardOptions, setSelectedCardOptions] =
    useState(selectedOptions);

  const { formData } = useFormContext();

  const { frequency } = formData;

  const checkIsActive = (index) => {
    const selectedIndexes = selectedCardOptions.map(
      (selectedCardOption) => selectedCardOption.index
    );
    return selectedIndexes.includes(index);
  };

  const handleSelectCardOption = (data) => {
    if (!checkIsActive(data.index)) {
      setSelectedCardOptions([...selectedCardOptions, data]);
      onSelectCard([...selectedCardOptions, data]);
    } else {
      const selectedCardOptionsFiltered = selectedCardOptions.filter(
        (selectedCardOption) => selectedCardOption.index !== data.index
      );

      setSelectedCardOptions(selectedCardOptionsFiltered);
      onSelectCard(selectedCardOptionsFiltered);
    }
  };

  const Checkmark = () => {
    return (
      <div className="checkmark">
        <div className="checkmarkWrapper">
          <img src={arcadeIcon} />
        </div>
      </div>
    );
  };

  let OptionItem = ({ item, index }) => {
    const cardOptionPrice =
      frequency == "Monthly" ? item.monthlyPriceLabel : item.yearlyPriceLabel;

    return (
      <div
        className={`optionItem ${checkIsActive(index) ? "active" : ""}`}
        onClick={() => {
          handleSelectCardOption({ ...item, index });
        }}
      >
        <div className="optionItemWrapper">
          <div className="pickAddOnsOption">
            <div className="pickAddOnsOptionsWrapper">
              <div className="pickAddOnsOptionsCheckbox">
                <Checkmark />
              </div>
              <div className="pickAddOnsOptionsTexts">
                <p className="pickAddOnsOptionsName">{item.title}</p>
                <Text>{item.description}</Text>
              </div>
              <div className="pickAddOnsOptionsPrice">+${cardOptionPrice}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="selectCard">
      <div className="selectCardWrapper verticalAlign">
        {options?.map((item, index) => {
          return <OptionItem item={item} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default SelectCardsVertical;
