let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = 5000;

let c = canvas.getContext("2d");

/*TRACK*/

c.fillStyle = "#6495ED";

let pLine = document.getElementById("petrol-line");
let start = 250;

const trigno = (a, b, c) => {
  return a + b + (a - b) * Math.cos(Math.PI * c);
};
let layers = [];

function land(x) {
  x = x / 150;
  layers.push(Math.random() * 50);
  return trigno(layers[Math.floor(x)], layers[Math.ceil(x)], x - Math.floor(x));
}

let coinsArr = [{dist: 500, num: 3}, {dist: 2000, num: 4}, {dist: 4000, num: 5}];


/*CAR*/
let img = new Image();

let car = new Image();
car.src = "images/car.png";
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
let i5=0;
window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
   cX += 10;
// cY+=Math.sin(cX)*10+land(i5++)+500;
   
    // coinsArr.splice(0, 1);
   
   
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

let coinY=100;
let coin=new Image();
coin.src="images/coin.png";
function coins(distance,n){
  var coinDistance=distance;
  for(var j=0;j<n;j++){
    c.drawImage(coin,coinDistance,canvas.height-img.height-40,70,50);
    coinDistance+=50;
  }
  }
  let petrolArr=[400,1900,3400];
let count4=0;
let j=0;
function petrol1(){

  if(cX + 100>=petrolArr[0]){
    petrolArr.splice(0,1);
    console.log(++count4);
//     if(count4>j){
// j++;

//     }
pLine.style.backgroundColor="rgb(21, 139, 41)";
start=250;
  }
  let petrol2=new Image();
  petrol2.src="images/petrolTanker.png";
  for(var k=0;k<3;k++){
    c.drawImage(petrol2,petrolArr[k],canvas.height-img.height-40,70,50);
  }
}









let count2=0;
let position = 0;
function animate() {

  for(let i=0; i<coinsArr.length; i++){
    if(cX + 100>= coinsArr[i].dist){
      console.log('coin collected');
      coinsArr[i].dist = coinsArr[i].dist + 50;
      coinsArr[i].num--;
      // console.log(coinsArr[i].num);
      if(coinsArr[i].num>=0){
        count2=count2+50;
        console.log(count2);
        document.getElementById("score").innerHTML=count2;
      }
   }}

  c.fillRect(0, 0, canvas.width, canvas.height);
  carMove();
  coinsArr.forEach(element => {
    coins(element.dist, element.num);
  });
  // coins(500,3);
  // coins(2000,4);
  // coins(4000,5);
  petrol1();
  dCaclulate();
  img.src = "images/trackNew.jpeg";
  position += 1;
  for (let i = 0; i < canvas.width; i++)
    c.drawImage(img, i, canvas.height - land(i) - 40);

   
  
  requestAnimationFrame(animate);
}

animate();

/*PETROL*/

let petrol = document.getElementById("petrol");




let PBar = setInterval(petrolWork, 50);
function petrolWork() {
  // if (start < 0) clearInterval(PBar, 500);
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

// Score
/*start*/
let bar = document.getElementById("line");
let load = document.getElementById("click-me");
function startShow() {
  load.style.visibility = "hidden";
}

load.addEventListener("click", () => {
  const cDown = setInterval(carDown, 1);
  function carDown() {
    cY += 50;
    if (cY > canvas.height - 80 - img.height) clearInterval(cDown);
    setTimeout(startShow(), 2000);
  }
  animate();
  petrol.style.visibility = "visible";
  pLine.style.visibility = "visible";
  d.style.visibility = "visible";
  bar.style.visibility = "visible";
});