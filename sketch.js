var car , carImg ;
var speed ,weight; 
var deformation = 3;
var wall ;
var touching_wall ;
var collided = false ;

function preload(){

}
function setup() {
  createCanvas(1000,500);
  car = createSprite(100,250,30,30);
  wall = createSprite(900,250,60,300);
  wall.shapeColor = "black";
  speed = random(40,110);
  weight = random(400,1500);
  car.velocityX = speed ;
}

function draw() {
  background("white");  
  drawSprites();
  /*console.log("Speed " + speed);
  console.log("Mass : " + weight);*/
  textSize(25);
  fill("blue");
  text("Thrills from Speed never last long",300,75);
  if((wall.x - car.x <= car.width/2 + wall.width/2) && collided === false){
    deformation = (0.5 * weight * speed * speed) / 22500 ;
    console.log("deformation" + deformation);
    if(deformation < 100){
      console.log("nothing happened");
      car.shapeColor = color(0,255,0);
    }
    if(100 <= deformation && deformation <= 180){
      console.log("everybody got hurts");
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180){
      console.log("lethal");
      car.shapeColor = color(255,0,0);
    }
    car.x = 855 ;
    car.velocityX = 0 ;
    collided = true ;
  }

}