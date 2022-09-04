// selectors
let dayOutput = document.querySelector("#day");
let monthOutput = document.querySelector("#month");
let daynumOutput = document.querySelector("#daynum");
let yearOutput = document.querySelector("#year");
let hoursOutput = document.querySelector("#hours");
let minOutput = document.querySelector("#min");
let secOutput = document.querySelector("#sec");
let amPmOutput = document.querySelector("#amPm");

// new date
let date = new Date();
let day = date.getDay();
let daynum = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

dayOutput.innerHTML = day;

switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 10:
    month = "December";
}

monthOutput.innerHTML = month;
daynumOutput.innerHTML = daynum < 10 ? "0" + daynum : daynum;
yearOutput.innerHTML = year;

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let amPm = "AM";
  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    amPm = "PM";
  }

  if (hours < 10) hours = "0" + hours;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  hoursOutput.innerHTML = `${hours}`;
  minOutput.innerHTML = `${min}`;
  secOutput.innerHTML = `${sec}`;
  amPmOutput.innerHTML = `${amPm}`;
  setTimeout(function () {
    clock();
  }, 1000);
}

clock();
