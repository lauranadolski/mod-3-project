const gameWindow = document.getElementById('main-container');
const skyBox = document.getElementById('sky');
const roadBox = document.getElementById('road');
const gameHeight = 480;
const gameWidth = 720;
const roadHeight = roadBox.style.top;
const roadWidth = roadBox.style.right;

console.log(roadHeight)


function createRoadRectangle() {
  let roadRectangle = document.createElement('div')
  roadRectangle.className = "road-rectangle"

  roadBox.appendChild(roadRectangle)
}

createRoadRectangle()





//
// var canvas = document.getElementById("road-canvas");
// var ctx = canvas.getContext("2d");
//
// class roadRect {
//   constructor() {
//     this.x = canvas.width/2;
//     this.y = 0;
//     this.dx = 0;
//     this.dy = 0.5;
//   }
//
//
//   draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       this.drawRect();
//       this.x += this.dx;
//       this.y += this.dy;
//   }
//
//   drawRect() {
//     ctx.beginPath();
//     ctx.rect(this.x, this.y, 10, 10);
//     ctx.fillStyle = "#FFFF00";
//     ctx.fill();
//     ctx.closePath();
//   }
//
//   initializeMovement() {
//     setInterval(this.draw.bind(this), 10);
//   }
// }
//
// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }
//
// const alwaysTrue = true;
//
// function createRect() {
//   let roadRectInstance = new roadRect;
//   roadRectInstance.initializeMovement.call(roadRectInstance);
// }
//
// createRect()
