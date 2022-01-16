"use strict";

function main() {
  swipeUpButton();
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
