var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple1;
var orangeLeaf,orangeLeaf1;
var redLeaf,redLeaf1;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple1 = loadImage("apple.png");
  orangeLeaf1 = loadImage("orangeLeaf");
  redLeaf1 = loadImage("redLeaf.png");
  sound = 1
}

function setup(){
  
  createCanvas(500,500);
  

// Moving background
garden=createSprite(250,250);
garden.scale = 1.5
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,360,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(180);
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1, 3));
  if(frameCount%140 == 0){
  if(select_sprites == 1) {
      spawnRedLeaf();
  }
}
  if(drameCount%140 == 0){
    if(select_sprites == 2){
    spawnApples()}
    }
  }
  if(frameCount%140 == 0){
  if(select_sprites == 2){
    spawnOrangeLeaf();
  }
}


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();


function spawnApples() {
  apple = createSprite(random (50, 350), 40, 10, 10);
  apple.addImage(apple1);
  apple.scale = 0.09;
  apple.velocityY = 3;
  rabbit.depth = apple.depth;
  rabbit.depth = apple.depth + 4;
}
function spawnOrangeLeaf(){
  orangeLeaf = createSprite(random (50, 350), 40, 10,10);
  orangeLeaf.addImage(orangeLeaf1);
  orangeLeaf.scale = 0.06;
  orangeLeaf.velocityY = 3;
}
function spawnRedLeaf() {
  redLeaf = createSprite(random (50, 350), 40, 10, 10);
  redLeaf.addImage(redLeaf1);
  redLeaf.scale = 0.04;
  redLeaf.velocityY = 3;
}

