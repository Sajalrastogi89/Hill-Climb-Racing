let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = 5000;

let c = canvas.getContext("2d");

//canvas.style.display = "none";
/*TRACK*/
let pLine = document.getElementById("petrol-line");
let start = 250;

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

let coinsArr = [
  { dist: 500, num: 3 },
  { dist: 2000, num: 4 },
  { dist: 4000, num: 5 },
];
/*CAR*/

let img = new Image();

let car = new Image();
car.src = "/images/car (2).png";
let cX = 100;
let cY = -60;
let carMove = () => {
  c.drawImage(car, cX, cY, 130, 150);
};
let d = document.getElementById("distance");
function dCaclulate() {
  let count = 0;
  var p = 500;
  count += cX;
  distance.innerHTML = count;
}
let i5 = 0;
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

let coinY = 100;
let coin = new Image();
coin.src = "/images/coin.png";
function coins(distance, n) {
  var coinDistance = distance;
  for (var j = 0; j < n; j++) {
    c.drawImage(coin, coinDistance, canvas.height - img.height - 40, 70, 50);
    coinDistance += 50;
  }
}
let petrolArr = [400, 1900, 3400];
let count4 = 0;
let j = 0;
function petrol1() {
  if (cX + 100 >= petrolArr[0]) {
    petrolArr.splice(0, 1);
    console.log(++count4);
    pLine.style.backgroundColor = "rgb(21, 139, 41)";
    start = 250;
  }
  if (start < -2) {
    window.location.assign("/html/out.html");
  }
  let petrol2 = new Image();
  petrol2.src = "/images/tank (2).png";
  for (var k = 0; k < 3; k++) {
    c.drawImage(petrol2, petrolArr[k], canvas.height - img.height - 40, 70, 50);
  }
}
let count2 = 0;
/*ANIMATE FUNCTION */
let position = 0;
let scoreNew = document.getElementById("score");
function animate() {
  c.fillRect(0, 0, canvas.width, canvas.height);
  carMove();
  coinsArr.forEach((element) => {
    coins(element.dist, element.num);
  });
  petrol1();
  dCaclulate();
  img.src = "/images/trackNew.jpeg";
  position += 1;
  for (let i = 0; i < canvas.width; i++)
    c.drawImage(img, i, canvas.height - land(i) - 40);
  for (let i = 0; i < coinsArr.length; i++) {
    if (cX + 100 >= coinsArr[i].dist) {
      console.log("coin collected");
      coinsArr[i].dist = coinsArr[i].dist + 50;
      coinsArr[i].num--;
      // console.log(coinsArr[i].num);
      if (coinsArr[i].num >= 0) {
        count2 = count2 + 50;
        console.log(count2);
        scoreNew.innerHTML = count2;
      }
    }
  }
  let TotalScore = count2;
  requestAnimationFrame(animate);
}
// animate();
/*PETROL*/
let fuel1 = document.getElementById("fuel1");
let petrol = document.getElementById("petrol");
let PBar = setInterval(petrolWork, 500);
function petrolWork() {
  if (start < 150 && start > 80) {
    pLine.style.backgroundColor = "#FFFF00";
    pLine.style.transition = "0.1s linear";
  }
  if (start < 80) {
    pLine.style.backgroundColor = "#FF0000";
    pLine.style.transition = "0.2s ease";
  }
  start = start - 5;
  pLine.style.width = start + "px";
  console.log(start);
}
petrolWork();
/*start*/
let section = document.getElementById("section1");

let load = document.getElementById("click-me");
let fuelImage = document.getElementById("fuel-image");
let coinImage = document.getElementById("coin-image");
function startShow() {
  load.style.visibility = "hidden";
}
/*BAR*/
let bar = document.getElementById("line");
load.addEventListener("click", () => {
  const cDown = setInterval(carDown, 50);
  function carDown() {
    cY += 50;
    if (cY > canvas.height - 80 - img.height) clearInterval(cDown);
    setTimeout(startShow(), 2000);
  }
  section.style.visibility = "hidden";
  petrol.style.visibility = "visible";
  pLine.style.visibility = "visible";
  d.style.visibility = "visible";
  bar.style.visibility = "visible";
  scoreNew.style.visibility = "visible";
  fuel1.style.visibility = "visible";
  fuelImage.style.visibility = "visible";
  coinImage.style.visibility = "visible";
  animate();
});
