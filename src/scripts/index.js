"use strict";

var countDownDate = new Date(); // Edit me  - 'Aug 07, 2021 22:30:00')

var daysOnCountdownMonth = new Date(countDownDate.getFullYear(), countDownDate.getMonth() + 1, 0).getDate();
var slidePhotosAmount = 6;
var sentences = [{
  sentence: '"The two most powerful warriors are patience and time."',
  author: 'Leo Tolstoy'
}, {
  sentence: '"Time is Money."',
  author: 'Benjamin Franklin'
}, {
  sentence: '"Time waits for no one."',
  author: 'Folklore'
}, {
  sentence: '"Better three hours too soon than a minute too late."',
  author: 'William Shakespeare'
}, {
  sentence: '"Lost time is never found again."',
  author: 'Benjamin Franklin'
}, {
  sentence: '"Time is the most valuable thing a man can spend."',
  author: 'Theophrastus'
}, {
  sentence: '"Time is the wisest counselor of all."',
  author: 'Pericles'
}, {
  sentence: '"The key is in not spending time, but in investing it."',
  author: 'Stephen R. Covey'
}, {
  sentence: '"It is the time you have wasted for your rose that makes your rose so important."',
  author: 'Antoine de Saint-Exupéry'
}, {
  sentence: '"Punctuality is the thief of time."',
  author: 'Oscar Wilde'
}];

function main() {
  swipeUpButton();
  countdown();
  slideImageChange();
  changeSentence();
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

function slideImageChange() {
  var imageContainer = document.getElementById('randomImage');
  setInterval(function () {
    var randomNumber = Math.floor(Math.random() * slidePhotosAmount) + 1;
    imageContainer.src = "images/slideImages/image_".concat(randomNumber, ".jpg");
  }, 5000);
}

function changeSentence() {
  var sentenceParagraph = document.getElementById('sentenceParagraph');
  var authorParagraph = document.getElementById('authorParagraph');
  setInterval(function () {
    var randomNumber = Math.floor(Math.random() * sentences.length);
    sentenceParagraph.innerText = sentences[randomNumber].sentence;
    authorParagraph.innerText = sentences[randomNumber].author;
  }, 5000);
}
