export function formatNumber(number) {
  if (isNaN(number)) {
    return "Invalid input";
  }

  if (Math.abs(number) >= 1e9) {
    return (number / 1e9).toFixed(2) + " B";
  } else if (Math.abs(number) >= 1e6) {
    return (number / 1e6).toFixed(2) + " M";
  } else if (Math.abs(number) >= 1000) {
    return (number / 1000).toFixed(2) + " K";
  } else {
    return number.toFixed(2);
  }
}

// Example usage:
// const formattedNumber1 = formatNumber(1234567890);
// const formattedNumber2 = formatNumber(987654.32);
// const formattedNumber3 = formatNumber(4567);
//
// console.log(formattedNumber1); // Output: 1.23B
// console.log(formattedNumber2); // Output: 987.65K
// console.log(formattedNumber3); // Output: 4.57K
