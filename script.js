const leapYearInput = document.getElementById('leap-year-input');
const leapYearResultInput = document.getElementById('leap-year-result-input');

// ?Function to calculate 'Leap Year'
function leapYear(year) {

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // return (year + " is a Leap Year");
    // leapYearResultInput.style.outline = "2px solid green"
    leapYearResultInput.style.backgroundColor = "green";
    leapYearResultInput.style.transition = 'background-color 0.33s linear';
    return ("Is a Leap Year");
  } else {
    // return (year + " is not a Leap Year");
    // leapYearResultInput.style.outline = "2px solid red"
    leapYearResultInput.style.backgroundColor = "red";
    leapYearResultInput.style.transition = 'background-color 0.33s linear';
    return ("Is not a Leap Year");
  }

}

// ?Getting and adding the value to the inputs in the HTML
leapYearInput.addEventListener('input', function () {

  // ?Removed different sign/characters
  this.value = this.value.replace(/\D/g, '');

  // ?Added some condition checking for the value before taking it to the 'year' variable

  if (leapYearInput.value.length !== 4) {
    // input is empty → show placeholder
    leapYearResultInput.value = "";
    leapYearResultInput.style.backgroundColor = "#ffffff33";
    return;
  }

  // ?Converted string to Number(Input values are given as string not number so we need to change it datatypr)
  let year = parseInt(leapYearInput.value);

  // ?Final Output
  leapYearResultInput.value = leapYear(year);
  // }

});
