"use strict";

var countDownDate = new Date(); // Edit me  - 'Aug 07, 2021 22:30:00')

var daysOnCountdownMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 0).getDate();

function main() {
  swipeUpButton();
  countdown();
}

main();

function swipeUpButton() {
  var swipeUpButton = document.getElementById('swipeUpButton');
  swipeUpButton.addEventListener('click', function () {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
}

function countdown() {
  var counters = document.querySelectorAll('.counterText');
  setInterval(function () {
    var now = new Date();
    if (now.getTime() - countDownDate.getTime() < 0) console.log('invalid date');
    var seconds = now.getSeconds() - countDownDate.getSeconds();
    var minutes = now.getMinutes() - countDownDate.getMinutes();
    var hours = now.getHours() - countDownDate.getHours();
    var days = now.getDate() - countDownDate.getDate();
    var months = now.getMonth() - countDownDate.getMonth();
    var years = now.getFullYear() - countDownDate.getFullYear();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }

    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }

    if (hours < 0) {
      hours += 24;
      days -= 1;
    }

    if (days < 0) {
      days += daysOnCountdownMonth;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    counters[0].innerText = "".concat(years, " years");
    counters[1].innerText = "".concat(months, " months");
    counters[2].innerText = "".concat(days, " days");
    counters[3].innerText = "".concat(hours, " hours");
    counters[4].innerText = "".concat(minutes, " minutes");
    counters[5].innerText = "".concat(seconds, " seconds");
  }, 1000);
}
