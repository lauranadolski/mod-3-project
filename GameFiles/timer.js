
// let actionArray = ['peanuts', 'popcorn', 'moist', 'Apple', 'horse', 'butt', 'pudding', 'Burger', 'fries', 'Nifty', 'Obama', 'Beyonce', 'Brad', 'garbage', 'cyst', 'mango', 'die', 'covfefe', 'stank', 'pus', 'Folds', 'plunger'];

let actionArray = ['peanuts', 'popcorn', 'grapes', 'Apple', 'horse', 'dog', 'pudding', 'Burger', 'fries', 'Nifty', 'Obama', 'Beyonce', 'Brad', 'cat', 'baby', 'mango', 'party', 'school', 'coding', 'happy', 'unicorn', 'soda'];

// let actionArray = ['peanuts', 'popcorn', 'Apple', 'horse', 'pudding', 'Burger', 'fries', 'Nifty', 'Obama', 'Beyonce', 'Brad', 'mango'];
let timeLeft = 5;
let willLose = true;
let score = 0;
let action = actionArray[(Math.floor(Math.random() * 19))];

function checkForMatch(speechArray) {
  console.log(`check for match initialized on ${speechArray}`)
  console.log(speechArray)
  console.log(`heres the action: ${action}`)
  console.log(speechArray.includes(action))
  if (speechArray.includes(action)) {
    changeWillLose(false);
  } else {
    changeWillLose(true);
  }
  console.log(willLose);
}

function changeWillLose(bool) {
  console.log(`changeWillLose on: ${bool}`)
  willLose = bool;
  if (!bool) {
    willLoseBlock.style.background = "green";
    console.log("green")
  }
  else {
    willLoseBlock.style.background = "red";
  }
}

function initializeTimer() {
  // let action = 'JUMP!';
  //let willLose = false;
  // const actionArray = ['JUMP!', 'DUCK!', 'RIGHT!', 'LEFT!'];

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
          console.log(currentLocation);
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


  // function keyInput(e) {
  //   if (e.key == "ArrowUp") {
  //     if (action == 'JUMP!') {
  //       changeWillLose(false);
  //       console.log("nice!")
  //     }
  //     else {
  //       changeWillLose(true);
  //       console.log("oh no!")
  //     }
  //   }
  //   else if (e.key == "ArrowDown") {
  //     if (action == 'DUCK!') {
  //       changeWillLose(false);
  //       console.log("nice!")
  //     }
  //     else {
  //       changeWillLose(true);
  //       console.log("oh no!")
  //     }
  //   }
  //   else if (e.key == "ArrowRight") {
  //     if (action == 'RIGHT!') {
  //       changeWillLose(false);
  //       console.log("nice!")
  //     }
  //     else {
  //       changeWillLose(true);
  //       console.log("oh no!")
  //     }
  //   }
  //   else if (e.key == "ArrowLeft" && action == 'LEFT!') {
  //     if (action == 'LEFT!') {
  //       changeWillLose(false);
  //       console.log("nice!")
  //     }
  //     else {
  //       changeWillLose(true);
  //       console.log("oh no!")
  //     }
  //   }
  // }



  let interval = setInterval(decrementTime, 1000);

  // window.addEventListener("keydown", keyInput);


}
