function leapYear(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return (year + " is a Leap Year");
  } else {
    return (year + " is not a Leap Year");
  }
  
}

console.log("This method is 100% accurate--------");
console.log(leapYear(1900));
console.log(leapYear(1996));
console.log(leapYear(2000));