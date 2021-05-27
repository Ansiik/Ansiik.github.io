

// Global variables for the width and height of the images
var IMAGE_WIDTH = 64;
var IMAGE_HEIGHT = 64;
var BOARD_SIZE = 350;

var luntikmult = [
  "kapa", "kuza", "pchelenok","mila", "cher", "piyavka",
  "korney", "elina", "svetlyachki", "myravei", "gusenitsa",
  "luntik"
];

// The initial number of pinned images
var numberOfPins = 5;
// To keep track of the game level
var level = 1;

// To reference the #leftSide and #rightSide divs
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

// For the <body> tag
var boardContainer = document.getElementById("board-container");

// Attach event handler to the board container
boardContainer.onclick = function gameOver() {
  alert("Гру закінчено, була обрана невірна відповідь!\n\n" +
        "Для того, щоб почати гру спочатку, клікніть на зелену кнопку\n");
  // Make sure everything gets disabled
  boardContainer.onclick = null;
  theLeftSide.lastChild.onclick = null;
};

function generatePins() {
  document.getElementById("level").innerHTML = "Level " + level; 

  for (var i = 1; i <= numberOfPins; i++) {
    var anImg = document.createElement("img");

    // We have to subtract the image height to make sure it fits
    var randTop = Math.floor(Math.random() * (BOARD_SIZE - IMAGE_HEIGHT));
    // We have to subtract the image width to make sure it fits
    var randLeft = Math.floor(Math.random() * (BOARD_SIZE - IMAGE_WIDTH));

    var randLunt = Math.floor(Math.random() * 12);

    anImg.src = "images/" + luntikmult[randLunt] + ".png";
    anImg.style.top = randTop + "px"; // don't forget to append "px"
    anImg.style.left = randLeft + "px";

    // Adds the img to the DOM, under the #leftSide div
    theLeftSide.appendChild(anImg);
  }

  // Clone the #leftSide div branch
  var leftSideImages = theLeftSide.cloneNode(true);
  // Remove the last child of the cloned div branch
  leftSideImages.removeChild(leftSideImages.lastChild);

  // Add the cloned div branch to the the DOM's #rightSide div
  theRightSide.appendChild(leftSideImages);
  // * note a div will be under the #rightSide div

  // Adds event handler to the last child of #leftSide
  theLeftSide.lastChild.onclick = function nextLevel(event) {
    // ensure the event doesn't also get applied to other
    // elements in the page, such as other pinned images
    // (that would trigger the function multiple times)
    event.stopPropagation();
    // if you did not have this, then the "Game Over!"
    // message that is attached to the onclick of the board container
    // would also be triggered.

    // Wipe down the game boards
    removeChildren(theLeftSide);
    removeChildren(theRightSide);

    // Increases the number of pins
    // and generates the next level
    level++;

    if (level % 3 == 0)
      numberOfPins += 3;
    else if (level % 7 == 0)
      numberOfPins += 7;
    else {
      numberOfPins += 4;
    }

    generatePins();
  };
}

function removeChildren(parentNode) {
  // as long as there is a child, keep removing
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}
