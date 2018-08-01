const gameWindow = document.getElementById('main-container');
const skyBox = document.getElementById('sky');
const roadBox = document.getElementById('road');
const roadRectangleBox = document.getElementById('road-rectangle-box');
const gameHeight = 480;
const gameWidth = 720;
const roadHeight = roadBox.style.top;
const roadWidth = roadBox.style.right;

function createRoadRectangle() {
  const roadRectangle = document.createElement("div");
  roadRectangle.className = 'road-rectangle';
  var top = roadRectangle.style.top = 150;
  var bottom = roadRectangle.style.bottom = top + 10;
  // var left = roadRectangle.style.left = 100;
  // var right = roadRectangle.style.right = 100;
  skyBox.appendChild(roadRectangle);

  function moveRoadRectangleDown() {
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

  setInterval(function(){
    createRoadRectangle();
  }, 800);
