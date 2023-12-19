import React, { useState } from "react";
import { Title, Text, Input } from "../../../../Base";
import StepActions from "../../../StepActions";
import {
  validateEmail,
  validateIsNotEmpty,
} from "../../../../../utils/validations";
import { isEmptyObject } from "../../../../../utils/helpers";
import { useFormContext } from "../../../../../context/FormContext";

function PersonalInfoStep() {
  const { formData, setFormData } = useFormContext();

  const { personalInfo } = formData;

  const [errors, setErrors] = useState({});

  const handleChangeForm = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      personalInfo: {
        ...personalInfo,
        [name]: value,
      },
    });
  };

  const handleNextStepAction = () => validateFields();

  const validateFields = () => {
    let errorMessages = {};

    for (const field in personalInfo) {
      if (field === "name") {
        if (!validateIsNotEmpty(personalInfo[field])) {
          errorMessages = { ...errorMessages, name: "This field is required" };
        }
      }

      if (field === "email") {
        if (!validateEmail(personalInfo[field])) {
          errorMessages = {
            ...errorMessages,
            email: "This field must be an email",
          };
        }

        if (!validateIsNotEmpty(personalInfo[field])) {
          errorMessages = { ...errorMessages, email: "This field is required" };
        }
      }

      if (field === "phoneNumber") {
        if (!validateIsNotEmpty(personalInfo[field])) {
          errorMessages = {
            ...errorMessages,
            phoneNumber: "This field is required",
          };
        }
      }
    }

    setErrors(errorMessages);

    return !isEmptyObject(errorMessages);
  };

  return (
    <>
      <div className="step-content">
        <div className="mb-large">
          <Title>Personal Info</Title>
          <Text>Please provide your name, email address and phone number.</Text>
        </div>
        <div className="form">
          <Input
            onChange={handleChangeForm}
            placeholder="e.g Stephen King"
            label="Name"
            name="name"
            value={personalInfo.name}
            error={errors.name}
            autoComplete="off"
          />
          <Input
            onChange={handleChangeForm}
            placeholder="e.g stephenking@lorem.com"
            label="Email Address"
            name="email"
            value={personalInfo.email}
            error={errors.email}
            autoComplete="off"
          />
          <Input
            onChange={handleChangeForm}
            placeholder="e.g +51987123455"
            label="Phone Number"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            error={errors.phoneNumber}
            autoComplete="off"
          />
        </div>
      </div>
      <dir className="step-bottom">
        <StepActions nextStepAction={handleNextStepAction} />
      </dir>
    </>
  );
}

export default PersonalInfoStep;
