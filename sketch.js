var ship, seaImg;
var sea;

function preload(){
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,20);
  sea.addImage("sea",seaImg);
  ship = createSprite(200,200,20,50);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  sea.velocityX = -2;
  sea.scale = 0.25;

  if(sea.x<0){
    sea.x = sea.width/9;
  }
 drawSprites();
}