//Convert Dates to years
export const getEmploymentYears = (startDate: Date, endDate: Date) => {
  const end = new Date(endDate);
  const start = new Date(startDate);

  let diff = (end.getTime() - start.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
};

export const confirmBeforeExecution = (
  message: string,
  ifOk: string,
  ifCancel: string
) => {
  let text = message;
  if (confirm(text) == true) {
    text = ifOk;
  } else {
    text = ifCancel;
  }
};

 export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
