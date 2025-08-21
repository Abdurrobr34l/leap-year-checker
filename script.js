const LeapYearInput = document.getElementById('leap-year-input');
const LeapYearResultInput = document.getElementById('leap-year-result-input');

const LeapYearButton = document.getElementById('leap-year-btn').addEventListener('click', function () {
  // console.log(LeapYearInput);  //? Checking if onclick is working when button is clicked
  let gotYear = parseInt(LeapYearInput.value)  //? Saved user given year value
  // console.log(gotYear);
  
  //? Now running the user given value inside of the condition to find out is it leap year/not
  function leapYear(gotYear) {

    if ((gotYear % 4 === 0 && gotYear % 100 !== 0) || gotYear % 400 === 0) {
      // return (gotYear + " is a Leap Year");
      return ("Is a Leap Year");
    } else {
      // return (gotYear + " is not a Leap Year");
      return ("Is not a Leap Year");
    }

  }
  const result = (leapYear(gotYear));  //? Saved condition result in this variable to show
  // console.log(result)  //? Checking is condition value is saved/not

LeapYearResultInput.value = result  //? Added the condition result inside the result input
console.log(result);

})