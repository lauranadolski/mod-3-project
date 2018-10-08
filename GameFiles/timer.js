// This is the array of words that will be prompted to the user to verbalize.
let actionArray = ['Peanuts', 'Popcorn', 'Grapes', 'Apple', 'Horse', 'Dog', 'Pudding', 'Burger', 'Fries', 'Nifty', 'Obama', 'Beyonce', 'Brad', 'Cat', 'Baby', 'Mango', 'Party', 'School', 'Coding', 'Happy', 'Unicorn', 'Soda'];
let timeLeft = 5;
let willLose = true;
let score = 0;
let action = actionArray[(Math.floor(Math.random() * 19))];


// Checks whether the user verbalized the correct word.
function checkForMatch(speechArray) {
  if (speechArray.includes(action)) {
    changeWillLose(false);
  } else {
    changeWillLose(true);
  }
}

// Changes the "will lose" boolean to the opposite value.
function changeWillLose(bool) {
  willLose = bool;
  if (!bool) {
    willLoseBlock.style.background = "green";
  }
  else {
    willLoseBlock.style.background = "red";
  }
}

// Starts running the timer and updating it on the DOM.
function initializeTimer() {
  let scoreElem = document.createElement('div');
  scoreElem.innerHTML = `Your score: ${score}`;
  scoreElem.style.position = 'relative';
  scoreElem.style.left = '87%';
  scoreElem.style.width = '85px';
  skyBox.appendChild(scoreElem);

  let timer = document.createElement('div');
  timer.innerHTML = `Time Left: ${timeLeft}`;
  timer.style.position = 'relative';
  timer.style.left = '45%';
  timer.style.width = '85px';
  skyBox.appendChild(timer);

  let actionElem = document.createElement('div');
  actionElem.innerHTML = `${action}`;
  actionElem.style.position = 'relative';
  actionElem.style.left = '45%';
  actionElem.style.width = '85px';
  skyBox.appendChild(actionElem);

    function decrementTime() {
      if (timeLeft == 3) {
        charSprite.style.left = '345px';
      }
      if (timeLeft == 0) {
        if (willLose) {
           gameOver()
        }
        else {
          let currentLocation = window.getComputedStyle(charSprite).left
          charSprite.style.left = '385px';
          resetTime();
        }
      }
      timeLeft -= 1;
      score += 5;
      scoreElem.innerHTML = `Your score: ${score}`;
      timer.innerHTML = `Time Left: ${timeLeft}`;
    }

    function resetTime() {
      annyang.pause()
      let randomNumber = (Math.floor(Math.random() * 19));
      action = actionArray[randomNumber]
      timeLeft = 4;
      actionElem.innerHTML = action;
      changeWillLose(true);
      annyang.resume();

    }
  let interval = setInterval(decrementTime, 1000);
}

// Code for future implementation of key commands:

// function keyInput(e) {
//   if (e.key == "ArrowUp") {
//     if (action == 'JUMP!') {
//       changeWillLose(false);
//     }
//     else {
//       changeWillLose(true);
//     }
//   }
//   else if (e.key == "ArrowDown") {
//     if (action == 'DUCK!') {
//       changeWillLose(false);
//     }
//     else {
//       changeWillLose(true);
//     }
//   }
//   else if (e.key == "ArrowRight") {
//     if (action == 'RIGHT!') {
//       changeWillLose(false);
//     }
//     else {
//       changeWillLose(true);
//     }
//   }
//   else if (e.key == "ArrowLeft" && action == 'LEFT!') {
//     if (action == 'LEFT!') {
//       changeWillLose(false);
//     }
//     else {
//       changeWillLose(true);
//     }
//   }
// }
