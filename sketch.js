//making a variable
var trex ,trex_running;
var ground ,groundImage

//to load animation, images, and sound
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png")
}

//to create things
function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(60,150)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5

  //create a ground sprite
  ground=createSprite(300,180,600,10)
  ground.addImage("ground",groundImage)}

//contunious runs for every frame
function draw(){
  background("black")
  console.log(mouseX,mouseY)

  //to jump trex when space is down
  if(keyDown("space")){
    trex.velocityY=-10
  }
  
  // making ground infinite
  if(ground.x<0){
    ground.x=width/2
  }

  //making ground go left
  ground.velocityX=-10

  //gravity
  trex.velocityY+=0.8

  //stoping the trex from falling down
  trex.collide(ground)

  //draw sprites
  drawSprites();
  

}
