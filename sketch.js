var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var ground1;
var bananaGroup;
var obstacle, obstacleImage, obstacleGroup;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 600);


  monkey = createSprite(100, 470, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.3;

  ground = createSprite(300, 550, 600, 15);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  ground1 = createSprite(300, 550, 600, 15);

  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("lightblue");

  if (keyDown("space")) {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  stroke("black");
  fill("white");
  textSize(40);
  text("survival time: " + frameCount, 150, 35);

  // monkey.depth = banana.depth;
  //monkey.depth = monkey.depth + 1;

  food();
  obstacles();
  drawSprites();
}

function food() {

  if (frameCount % 200 === 0) {
    banana = createSprite(650, random(120, 200), 10, 20);
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    bananaGroup.add(banana);
  }

}

function obstacles() {

  if (frameCount % 300 === 0) {
    obstacle = createSprite(650, 465, 10, 20);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.scale = 0.4;
    obstacle.velocityX = -3;
    obstacle.lifetime = 700;
  }
}