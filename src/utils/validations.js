export const validateIsNotEmpty = (value) => {
  return value !== "";
};

export const validateEmail = (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return regex.test(value);
};
