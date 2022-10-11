let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = 5000;

let c = canvas.getContext("2d");

/*TRACK*/

c.fillStyle = "#6495ED";

const trigno = (a, b, c) => {
  return a + b + (a - b) * Math.cos(Math.PI * c);
};
let layers = [];

function land(x) {
  x = x / 150;
  layers.push(Math.random() * 50);
  return trigno(layers[Math.floor(x)], layers[Math.ceil(x)], x - Math.floor(x));
}

/*CAR*/

let img = new Image();

let car = new Image();
car.src = "/images/car (2).png";
let cX = 100;
let cY = -100;
let carMove = () => {
  c.drawImage(car, cX, cY, 130, 150);
};
let d = document.getElementById("distance");
function dCaclulate() {
  let count = 0;
  var p = 500;
  count += cX;
  distance.innerHTML = count;
  // setInterval(() => {
  //   distance.style.left = p + "px";
  //   p+=1;
  // }, 50);
}
window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    cX += 10;
  }
  if (event.key == "ArrowLeft") {
    cX -= 10;
  }
  if (event.key == "ArrowUp") {
    cX += 10;
    cY -= 2;
  }
  if (event.key == "ArrowDown") {
    cY += 2;
    cX += 5;
  }
});

/*ANIMATE FUNCTION */
let position = 0;
function animate() {
  c.fillRect(0, 0, canvas.width, canvas.height);
  carMove();
  dCaclulate();
  img.src = "/images/trackNew.jpeg";
  position += 1;
  for (let i = 0; i < canvas.width; i++)
    c.drawImage(img, i, canvas.height - land(i + position) - 40);
  requestAnimationFrame(animate);
}

/*PETROL*/

let petrol = document.getElementById("petrol");
let pLine = document.getElementById("petrol-line");

let start = 230;
let PBar = setInterval(petrolWork, 500);
function petrolWork() {
  if (start < 0) clearInterval(PBar, 500);
  if (start < 150 && start > 80) {
    pLine.style.backgroundColor = "#FFFF00";
    pLine.style.transition = "0.1s linear";
  }
  if (start < 80) {
    pLine.style.backgroundColor = "#FF0000";
    pLine.style.transition = "0.2s ease";
  }
  start = start - 2;
  pLine.style.width = start + "px";
}
petrolWork();
/*start*/
let bar = document.getElementById("line");
let load = document.getElementById("click-me");
function startShow() {
  load.style.visibility = "hidden";
}

load.addEventListener("click", () => {
  const cDown = setInterval(carDown, 50);
  function carDown() {
    cY += 15;
    if (cY > canvas.height - 80 - img.height) clearInterval(cDown);
    setTimeout(startShow(), 2000);
  }
  animate();
  petrol.style.visibility = "visible";
  pLine.style.visibility = "visible";
  d.style.visibility = "visible";
  bar.style.visibility = "visible";
});
