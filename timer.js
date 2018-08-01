let action = '';
let timeLeft = 5;
let willLose = false;
let timer = document.createElement('div');
timer.innerHTML = `Time Left: ${timeLeft}`;
timer.style.position = 'relative';
timer.style.left = '87%';
timer.style.width = '85px';
skyBox.appendChild(timer);


  function decrementTime() {
    console.log(timeLeft)
    if (timeLeft == 0) {
      if (willLose) {
        alert('you lose bitch!')
      }
      resetTime();
    }
    timeLeft -= 1
    timer.innerHTML = `Time Left: ${timeLeft}`
  }

  function resetTime() {
    timeLeft = 6;
    //willLose = true;
  }


function keyInput(e) {
  console.log(e)
  if (e.key == " ") {
    willLose = false;
  }
}

function initialize() {
  let interval = setInterval(decrementTime, 1000);
  window.addEventListener("keydown", keyInput);
}

initialize()
