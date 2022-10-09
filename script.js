let canvas = document.getElementById("canvas");
canvas.width = 3500;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

function animate() {
  c.fillStyle = "#6495ED";
  c.fillRect(0, 0, canvas.width, canvas.height);
  let img = new Image();
  img.src = "images/track4.png";

  img.addEventListener("load", () => {
    for (i = 0; i < canvas.width; i++) c.drawImage(img, i, 520);
  });
}
// 510 + 10 * Math.sin((Math.PI / 180) * i)
animate();
/*PETROL*/

let petrol = document.getElementById("petrol");
let pLine = document.getElementById("petrol-line");

let start = 210;

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

/*CAR*/

let car = document.getElementById("car");
//let x = window.innerHeight;

function carMove() {
  let carStart = 0;
  let x = 10;
  const CarMoving = setInterval(carAnimate, 100);
  function carAnimate() {
    carStart += x;
    if (carStart > 2280) carStart = 0;
    car.style.left = carStart + "px";
    if (carStart > 200) {
      car.style.left = carStart + "px";
      //car.style.transform = "rotate(-45deg)";
    }
    //if (carStart > 200 && carStart < 400) car.style.top = 0 + "px";
  }
}
carMove();
