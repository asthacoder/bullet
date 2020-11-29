var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,700);

  bullet=createSprite(50,240,55,20);

  bullet.velocityX=7;

  wall=createSprite(805,280,100,height/2);

  thickness = random(22, 83);
weight = random(30, 52);
speed = random(223, 321);

}

function draw() {

  background("pink");  

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX=0;

    damage = 0.5 * weight * speed * speed/ thickness **3;
 
    if (damage > 10) {

    wall.shapeColor = rgb(255, 0, 0);
  }

  else if (damage < 10) {

    wall.shapeColor = rgb(0, 255, 0);

  }
 
  }
 
if(bullet.isTouching(wall))
{
  bullet.velocityX=0;
}

drawSprites();
}
function collision(bulletSprite, wallSprite) {
  bulletRightEdge = bulletSprite.x + bulletSprite.width;
  wallLeftEdge = wallSprite.x;

  if (bulletRightEdge >= wallLeftEdge) {
      return true;
  } else {
      return false;
  }
}