const gameWindow = document.getElementById('main-container');
const skyBox = document.getElementById('sky');
const roadBox = document.getElementById('road');
const roadRectangleBox = document.getElementById('road-rectangle-box');
const gameHeight = 480;
const gameWidth = 720;
const roadHeight = roadBox.style.top;
const roadWidth = roadBox.style.right;
const charSprite = document.getElementById('char-sprite');
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
        charSprite.src = spriteOptionArray[spriteOptionIndex += 1];
      }
      counter++;
    }
    window.requestAnimationFrame(step)
  }

  setInterval(function(){
    createRoadRectangle();
  }, 800);
