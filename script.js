let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = 5000;

let c = canvas.getContext("2d");

/*TRACK*/
let coin=new Image();
c.fillStyle = "#6495ED";
let coinDistance=400;
function coins(){
  // for(let j=0;j<5;j++){
    coin.src="images/coin.png";
   for(let k=0;k<20;k++)
    c.drawImage(coin,coinDistance+400*k,canvas.height-130,80,60);
  //  coinDistance=coinDistance+50;
   
   
    // coinDistance+=200;
    console.log(62536);
  // }
}


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
car.src = "images/car.png";
let cX = 100;
let cY = canvas.height - 200 - img.height;
let carMove = () => {
  c.drawImage(car, cX, cY, 150, 150);
};

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
   cX += 10;
   ;
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
let position = 0;
function animate() {
  c.fillRect(0, 0, canvas.width, canvas.height);
  carMove();
  img.src = "images/trackNew.jpeg";
  // position += 1;
  for (let i = 0; i < canvas.width; i++)
    c.drawImage(img, i, canvas.height - land(i) - 40);

    coins();
  
  requestAnimationFrame(animate);
}

animate();

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

/*COINS
let coin = new Image();
coin.src = "images/coin.png";
c.drawImage(coin, 100, 100);
/*
let coinDistance = 500;
for (let j = 0; j < 5; j++) {
  let coin = new Image();
  coin.src = "images/coin.png";
  c.drawImage(coin, coinDistance, canvas.height - land(j - 15), 100, 100);
  coinDistance += 70;
}
*/
