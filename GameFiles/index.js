const gameWindow = document.getElementById('main-container');
const skyBox = document.getElementById('sky');
const roadBox = document.getElementById('road');
const roadRectangleBox = document.getElementById('road-rectangle-box');
const gameHeight = 480;
const gameWidth = 720;
const roadHeight = roadBox.style.top;
const roadWidth = roadBox.style.right;
const charSprite = document.getElementById('char-sprite');
const willLoseBlock = document.getElementById('safe-or-no');
const spriteOptionArray = ["./gameSprites/gameSpriteNeutral.png", "./gameSprites/gameSpriteRight.png", "./gameSprites/gameSpriteNeutral.png", "./gameSprites/gameSpriteLeft.png"]
let spriteOptionIndex = 0;

function createRoadRectangle() {
  const roadRectangle = document.createElement("div");
  roadRectangle.className = 'road-rectangle';
  var top = roadRectangle.style.top = 150;
  var bottom = roadRectangle.style.bottom = top + 10;
  // var left = roadRectangle.style.left = 100;
  // var right = roadRectangle.style.right = 100;
  skyBox.appendChild(roadRectangle);

  function moveRoadRectangleDown() {
    //console.log(roadRectangle.style.top)
    roadRectangle.style.top = `${top += 5}px`;
    if (top < gameHeight) {
      window.requestAnimationFrame(moveRoadRectangleDown);
    } else {
      roadRectangle.remove();
    }
  }
  window.requestAnimationFrame(moveRoadRectangleDown);
  return roadRectangle;
}

  function animateMainCharacter() {
    let counter = 0;
    function step() {
      window.requestAnimationFrame(step)
      if (spriteOptionIndex == 3) {
        spriteOptionIndex = -1;
      }
      if (counter % 6 == 0) {
        console.log("yoyoyo")
        charSprite.src = spriteOptionArray[spriteOptionIndex += 1];
      }
      counter++;
    }
    window.requestAnimationFrame(step)
  }

  setInterval(function(){
    createRoadRectangle();
  }, 800);


  document.addEventListener('DOMContentLoaded', () => {
    const endPoint = 'http://localhost:3000/api/v1/users';
    fetch(endPoint)
      .then(res => res.json())
      .then(json =>
        json.forEach(user => {
          const markup = `
            <h3>${user.name} : ${user.points}
            </h3>
          `;

          document.getElementById('sky').innerHTML += markup;
        })
      );
      // createUser()
  });

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
