export const validateMyTurns = (input) => {
  const errors = {};
  const expresionRegularDate = /^\d{4}-\d{2}-\d{2}$/;
  const expresionRegularTime = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

  if (!expresionRegularDate.test(input.date)) {
    errors.date = true;
  }
  if (!expresionRegularTime.test(input.time)) {
    errors.time = true;
  }
  return errors;
};

export const convertDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};
