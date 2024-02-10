export function formatMinutesToHoursAndMinutes(minutes) {
  if (isNaN(minutes) || minutes < 0) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}min`;
  } else if (remainingMinutes === 0) {
    return `${hours}h`;
  } else {
    return `${hours}h ${remainingMinutes}min`;
  }
}

// Example usage:
// const formattedTime = formatMinutesToHoursAndMinutes(130);
// console.log(formattedTime); // Output: 2h 10min
