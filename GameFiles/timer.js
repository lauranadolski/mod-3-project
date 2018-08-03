let action = 'JUMP!';
let timeLeft = 3;
let willLose = true;
let playerLists = []
let maxFivePlayers = []
let maxFivePoints = []
//let willLose = false;
let score = 0;
// const gameWindow = document.getElementById('main-container');
// const skyBox = document.getElementById('sky');
// const roadBox = document.getElementById('road');
// const roadRectangleBox = document.getElementById('road-rectangle-box');
// const gameHeight = 480;
// const gameWidth = 720;
// const roadHeight = roadBox.style.top;
// const roadWidth = roadBox.style.right;
// const charSprite = document.getElementById('char-sprite');
// const willLoseBlock = document.getElementById('safe-or-no');
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
        // alert(`you lose bitch! your score: ${score}`)

        endGame(score)
      }
      resetTime();
    }
    timeLeft -= 1;
    score += 5;
    scoreElem.innerHTML = `Your score: ${score}`;
    timer.innerHTML = `Time Left: ${timeLeft}`;
  }
  function removeAll() {
    skyBox.remove()
    roadBox.remove()
    roadRectangleBox.remove()
    willLoseBlock.remove()
  }




  function updateScore(score) {
  let bodyJSON = {name: "Chang", points: score}
  fetch(`http://localhost:3000/api/v1/users/2`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      }).then(res => res.json()).then(updatedNote => console.log(updatedNote));
        // our backend responds with the updated note instance represented as JSON
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
function endGame(ascore) {
  removeAll()
  clearInterval(interval)
  gameWindow.style.background = 'white'
  updateScore(ascore)
  loadPlayers()

}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

//
//
//
//
//
//   // let maxFivePlayers = playerLists.map(user => user.points.sort((a,b) => a>b).slice(0,5))
//   // console.log(maxFivePlayers)

// }

  function loadPlayers() {
    const url = 'http://localhost:3000/api/v1/users'
    fetch(url).then(res=> res.json()).then(json => json.forEach(user => playerLists.push(user))).then(iHateYouAsynchronous => {
      playerLists = playerLists.filter(onlyUnique);
      playerLists.forEach(user=> maxFivePoints.push(user.points))
      maxFivePoints.sort((a,b) => a > b).slice(0,5)
      // debugger
      for (let i = 0; i < playerLists.length; i ++) {
        for (let j = 0; j < maxFivePoints.length; j++) {
          if (playerLists[i].points === maxFivePoints[j]) {
            maxFivePlayers.push(playerLists[i])
          }
        }
      }
      maxFivePlayers = maxFivePlayers.filter(onlyUnique)
      let playersHTML = maxFivePlayers.map(user =>
      `<div class="row">
          <div class="name">${user.name} : ${user.points} </div>
          </div>
          <br>`).join('')
        gameWindow.innerHTML = playersHTML
    })
  }
  function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }

   function updateScore(score) {
   let bodyJSON = {name: "Chang", points: score}
   fetch(`http://localhost:3000/api/v1/users/2`, {
         method: 'PATCH',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
         },
         body: JSON.stringify(bodyJSON),
       }).then(res => res.json())
         // our backend responds with the updated note instance represented as JSON
     };

     function createUser(name) {
       let bodyJSON = {name: name, points: 0}
       fetch(`http://localhost:3000/api/v1/users`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
         },
         body: JSON.stringify(bodyJSON),
       }).then(res => res.json())
      // our backend responds with the updated note instance represented as JSON
      }


  let interval = setInterval(decrementTime, 1000);
  window.addEventListener("keydown", keyInput)
