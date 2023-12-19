import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const frequencies = ["Monthly", "Yearly"];

  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    selectPlan: {},
    pickAddOn: [],
    frequency: frequencies[0],
  });

  const getTotalFormData = () => {
    const pickAddOnTotal = formData.pickAddOn.reduce((acc, item) => {
      return (
        acc +
        (formData.frequency == "Monthly" ? item.monthlyPrice : item.yearlyPrice)
      );
    }, 0);

    const selectPlanTotal =
      formData.frequency == "Monthly"
        ? formData.selectPlan.monthlyPrice
        : formData.selectPlan.yearlyPrice;

    return pickAddOnTotal + selectPlanTotal;
  };

  const setFrequency = (status) => {
    setFormData({ ...formData, frequency: frequencies[status ? 0 : 1] });
  };

  return (
    <FormContext.Provider
      value={{ formData, setFormData, setFrequency, getTotalFormData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
