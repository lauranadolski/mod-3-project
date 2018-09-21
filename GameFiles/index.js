const gameWindow = document.getElementById('main-container');
const skyBox = document.getElementById('sky');
const roadBox = document.getElementById('road');
const roadRectangleBox = document.getElementById('road-rectangle-box');
const overlayDiv = document.getElementById('overlay');
const gameHeight = 480;
const gameWidth = 720;
const roadHeight = roadBox.style.top;
const roadWidth = roadBox.style.right;
const charSprite = document.getElementById('char-sprite');
const willLoseBlock = document.getElementById('safe-or-no');
const spriteOptionArray = ["./gameSprites/gameSpriteNeutral.png", "./gameSprites/gameSpriteRight.png", "./gameSprites/gameSpriteNeutral.png", "./gameSprites/gameSpriteLeft.png"]
let spriteOptionIndex = 0;

///////////////////////////////////////////////////////////////////////
// Starting and ending the game
// "Start" functionality

  function startGame() {
    initializeTimer();
    listen();
    animateMainCharacter();
    setInterval(function(){
      createRoadRectangle();
    }, 500);
    setInterval(function(){
      createClouds();
    }, 3500);
    setInterval(function(){
      createObstacle();
    }, 4000);
  }

// "Game Over" functionality
  function gameOver() {
    alert(`you lose! your score: ${score}`)
    clearInterval(startGame);
    location.reload();
  }

////////////////////////////////////////////////////////////////////////
// Changing the size of a passed-through item.

  function changeSize(targetItem, horizontalFactorOfChange, verticalFactorOfChange) {
    let oldWidth = parseInt(window.getComputedStyle(targetItem).width);
    let oldHeight = parseInt(window.getComputedStyle(targetItem).height);

    targetItem.style.width = `${Math.ceil(oldWidth * horizontalFactorOfChange)}px`;
    targetItem.style.height = `${Math.ceil(oldHeight * verticalFactorOfChange)}px`;
  }

//////////////////////////////////////////////////////////////////////
// Road rectangle creation and propagation.

function createRoadRectangle() {
  const roadRectangle = document.createElement("div");
  roadRectangle.className = 'road-rectangle';
  var top = roadRectangle.style.top = 144;
  skyBox.appendChild(roadRectangle);

  let counter = 0;

  function moveRoadRectangle() {

    if (counter % 50 === 0) {
      changeSize(roadRectangle, 1.0005, 1);
      roadRectangle.style.top = `${top += 1}px`;
    }

    if (counter % 25 === 0) {
      changeSize(roadRectangle, 1, 1.000005);
      roadRectangle.style.top = `${top += 1}px`;
    }

    roadRectangle.style.top = `${top += 3}px`;
    counter += 1;

    if (top < gameHeight) {
      window.requestAnimationFrame(moveRoadRectangle);
    } else {
      roadRectangle.remove();
    }
  }

  window.requestAnimationFrame(moveRoadRectangle);
  return roadRectangle;
}
////////////////////////////////////////////////////////////////////
// OBSTACLES //

function createObstacle() {
  const obstacle = document.createElement("div");
  obstacle.className = 'obstacle';
  obstacle.innerText = '🔥'
  var top = obstacle.style.top = 144;

  skyBox.appendChild(obstacle);

  function moveObstacle() {
   obstacle.style.top = `${top += 2}px`;
   changeSize(obstacle, 1.00000005, 1.00000005);
   if (top < gameHeight) {
     window.requestAnimationFrame(moveObstacle);
   } else {
     obstacle.remove();
   }
 }
  window.requestAnimationFrame(moveObstacle);
  return obstacle;
}

///////////////////////////////////////////////////////////////////////
// MAIN CHARACTER SPRITE ANIMATION
  function animateMainCharacter() {
    let counter = 0;
    function step() {
      window.requestAnimationFrame(step)
      if (spriteOptionIndex == 3) {
        spriteOptionIndex = -1;
      }
      if (counter % 6 == 0) {
        charSprite.src = spriteOptionArray[spriteOptionIndex += 1];
      }
      counter++;
    }
    window.requestAnimationFrame(step)
  }

///////////////////////////////////////////////////////////////////
// CLOUDS //

function createClouds() {
  const cloud = document.createElement("div");
  cloud.className = 'cloud';
  cloud.style.top = `${0}px`;
  cloud.style.top = `${-Math.floor((Math.random() * 90) + 1)}px`;
  var left = cloud.style.left = 5;
  overlayDiv.appendChild(cloud);

  function moveCloud() {
   cloud.style.left = `${left += 0.5}px`;

   if (left < gameWidth) {
     window.requestAnimationFrame(moveCloud);
   } else {
     cloud.remove();
   }
 }
  window.requestAnimationFrame(moveCloud);
  return cloud;
}

////////////////////////////////////////////////////////////////////////////
// Sun creation & appending to DOM
  let sun = document.createElement("img");
  sun.src = "./gameSprites/sun.png";
  sun.className = "sun";
  skyBox.appendChild(sun);



//////////////////////////////////////////////////////////////////////////
// Dodge - for Sprite to dodge the obstacle.

  // function dodge() {
  //   charSprite.
  // }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// API Functionality


  // document.addEventListener('DOMContentLoaded', () => {
//   const endPoint = 'http://localhost:3000/api/v1/users';
//   fetch(endPoint)
//     .then(res => res.json())
//     .then(json =>
//       json.forEach(user => {
//         const markup = `
//           <h3>${user.name} : ${user.points}
//           </h3>
//         `;
//
//         document.getElementById('sky').innerHTML += markup;
//       })
//     );
//     // createUser()
// });

function updateScore() {
let bodyJSON = {name: "Sang", points: 89}
fetch(`http://localhost:3000/api/v1/users/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyJSON),
    }).then(res => res.json()).then(updatedNote => console.log(updatedNote));
      // our backend responds with the updated note instance represented as JSON
  };

function createUser() {
let bodyJSON = {name: "Issac", points: 39}
fetch(`http://localhost:3000/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bodyJSON),
    }).then(res => res.json()).then(data => console.log(data));
      // our backend responds with the updated note instance represented as JSON
}


// startGame();
//
//
//
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////
//
//
//
// var actionArray = ['peanuts', 'popcorn', 'moist', 'Apple', 'horse', 'butt', 'pudding', 'Burger', 'fries', 'Nifty', 'Obama', 'Beyonce', 'Brad', 'garbage', 'cyst', 'mango', 'die', 'covfefe', 'stank', 'pus', 'Folds', 'plunger'];
// var timeLeft = 5;
// var willLose = true;
// var score = 0;
// var action = actionArray[(Math.floor(Math.random() * 19))];
//
// function checkForMatch(speechArray) {
//   console.log(`check for match initialized on ${speechArray}`)
//   console.log(speechArray)
//   console.log(`heres the action: ${action}`)
//   console.log(speechArray.includes(action))
//   if (speechArray.includes(action)) {
//     changeWillLose(false);
//   } else {
//     changeWillLose(true);
//   }
//   console.log(willLose);
// }
//
// function changeWillLose(bool) {
//   console.log(`changeWillLose on: ${bool}`)
//   willLose = bool;
//   if (!bool) {
//     willLoseBlock.style.background = "green";
//     console.log("green")
//   }
//   else {
//     willLoseBlock.style.background = "red";
//   }
// }
//
// function initializeTimer() {
//   // let action = 'JUMP!';
//   //let willLose = false;
//   // const actionArray = ['JUMP!', 'DUCK!', 'RIGHT!', 'LEFT!'];
//
//   let scoreElem = document.createElement('div');
//   scoreElem.innerHTML = `Your score: ${score}`;
//   scoreElem.style.position = 'relative';
//   scoreElem.style.left = '87%';
//   scoreElem.style.width = '85px';
//   skyBox.appendChild(scoreElem);
//
//   let timer = document.createElement('div');
//   timer.innerHTML = `Time Left: ${timeLeft}`;
//   timer.style.position = 'relative';
//   timer.style.left = '45%';
//   timer.style.width = '85px';
//   skyBox.appendChild(timer);
//
//   let actionElem = document.createElement('div');
//   actionElem.innerHTML = `${action}`;
//   actionElem.style.position = 'relative';
//   actionElem.style.left = '45%';
//   actionElem.style.width = '85px';
//   skyBox.appendChild(actionElem);
//
//
//     function decrementTime() {
//       if (timeLeft == 3) {
//         charSprite.style.left = '345px';
//       }
//       if (timeLeft == 0) {
//         if (willLose) {
//            gameOver()
//         }
//         else {
//           let currentLocation = window.getComputedStyle(charSprite).left
//           console.log(currentLocation);
//           charSprite.style.left = '385px';
//           resetTime();
//         }
//
//       }
//       timeLeft -= 1;
//       score += 5;
//       scoreElem.innerHTML = `Your score: ${score}`;
//       timer.innerHTML = `Time Left: ${timeLeft}`;
//     }
//
//     function resetTime() {
//       annyang.pause()
//       let randomNumber = (Math.floor(Math.random() * 19));
//       action = actionArray[randomNumber]
//       timeLeft = 4;
//       actionElem.innerHTML = action;
//       changeWillLose(true);
//       annyang.resume();
//
//     }
//
//
//   // function keyInput(e) {
//   //   if (e.key == "ArrowUp") {
//   //     if (action == 'JUMP!') {
//   //       changeWillLose(false);
//   //       console.log("nice!")
//   //     }
//   //     else {
//   //       changeWillLose(true);
//   //       console.log("oh no!")
//   //     }
//   //   }
//   //   else if (e.key == "ArrowDown") {
//   //     if (action == 'DUCK!') {
//   //       changeWillLose(false);
//   //       console.log("nice!")
//   //     }
//   //     else {
//   //       changeWillLose(true);
//   //       console.log("oh no!")
//   //     }
//   //   }
//   //   else if (e.key == "ArrowRight") {
//   //     if (action == 'RIGHT!') {
//   //       changeWillLose(false);
//   //       console.log("nice!")
//   //     }
//   //     else {
//   //       changeWillLose(true);
//   //       console.log("oh no!")
//   //     }
//   //   }
//   //   else if (e.key == "ArrowLeft" && action == 'LEFT!') {
//   //     if (action == 'LEFT!') {
//   //       changeWillLose(false);
//   //       console.log("nice!")
//   //     }
//   //     else {
//   //       changeWillLose(true);
//   //       console.log("oh no!")
//   //     }
//   //   }
//   // }
//
//
//
//   let interval = setInterval(decrementTime, 1000);
//
//   // window.addEventListener("keydown", keyInput);
//
//
// }
//
//
//
//
//
//
//
//
//
//
// ///////////////////////////////////////////////////////////////////////
//
//
//
//
// console.log("i'm in the annyang file")
//
// function listen() {
//
//   let commands = {
//     'listen': function() { console.log('I heard you say listen.') },
//     'reset': function() { console.log('I heard you say reset.') },
//     'hello': function() { console.log('I heard you say hello.') },
//     'goodbye': function() { console.log('I heard you say goodbye.') },
//     'beyonce': function() { console.log('I heard you say Beyonce.') },
//     'start game': function() {startGame();},
//     'end game': function() {gameOver();}
//   };
//
//   annyang.addCommands(commands);
//
//   annyang.start({ autoRestart: false, continuous: true, paused: false });
//
//
//   annyang.addCallback('result', function(phrases) {
//     console.log("bout to checkForMatch!")
//
//     console.log(`These are the original phrases: ${phrases}`)
//
//
//     let sanitizedPhrases = phrases.map( element => {if (element[0] == " ") {return element.substring(1)} else {return element}})
//
//
//     console.log(`These are the sanitized phrases: ${sanitizedPhrases}`)
//
//
//     checkForMatch(sanitizedPhrases);
//
//
//   });
//
// }
