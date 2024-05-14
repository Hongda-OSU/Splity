export const formatDate = (date) => {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  const formattedTime = `${month} ${day}, ${year} - ${hour}:${
    minute < 10 ? "0" + minute : minute
  } ${ampm}`;
  return formattedTime;
};
