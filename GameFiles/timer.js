let action = 'JUMP!';
let timeLeft = 3;
let willLose = true;
//let willLose = false;
let score = 0;
const actionArray = ['JUMP!', 'DUCK!', 'RIGHT!', 'LEFT!'];

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
    if (timeLeft == 0) {
      if (willLose) {
        alert(`you lose bitch! your score: ${score}`)
      }
      resetTime();
    }
    timeLeft -= 1;
    score += 5;
    scoreElem.innerHTML = `Your score: ${score}`;
    timer.innerHTML = `Time Left: ${timeLeft}`;
  }

  function resetTime() {
    let randomNumber = Math.floor((Math.random() * 3));
    action = actionArray[randomNumber]
    timeLeft = 4;
    actionElem.innerHTML = action;
    changeWillLose(true);
  }


function keyInput(e) {
  if (e.key == "ArrowUp") {
    if (action == 'JUMP!') {
      changeWillLose(false);
      console.log("nice!")
    }
    else {
      changeWillLose(true);
      console.log("oh no!")
    }
  }
  else if (e.key == "ArrowDown") {
    if (action == 'DUCK!') {
      changeWillLose(false);
      console.log("nice!")
    }
    else {
      changeWillLose(true);
      console.log("oh no!")
    }
  }
  else if (e.key == "ArrowRight") {
    if (action == 'RIGHT!') {
      changeWillLose(false);
      console.log("nice!")
    }
    else {
      changeWillLose(true);
      console.log("oh no!")
    }
  }
  else if (e.key == "ArrowLeft" && action == 'LEFT!') {
    if (action == 'LEFT!') {
      changeWillLose(false);
      console.log("nice!")
    }
    else {
      changeWillLose(true);
      console.log("oh no!")
    }
  }
}

function changeWillLose(bool) {
  willLose = bool;
  if (!bool) {
    willLoseBlock.style.background = "green";
    console.log("green")
  }
  else {
    willLoseBlock.style.background = "red";
  }
}

function initialize() {
  let interval = setInterval(decrementTime, 1000);
  window.addEventListener("keydown", keyInput);
}

initialize()
