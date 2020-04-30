

var speed;
var bulletWeight;
 var bulletSpeed;
var thicknessofWall;
function setup() {
  createCanvas(800,400);
 bullet = createSprite(50,200,20,20);
 wall = createSprite(780,200,20,800)
 speed = random(223,321)
 bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var dam = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thicknessofWall * thicknessofWall*thicknessofWall);
    
    if (dam<10){
      wall.shapeColor = "green"
        }
    if (dam>10){
          wall.shapeColor = "red"
            }
   
  }
 drawSprites();
 }
function hasCollided(Ibullet,Iwall){
bulletRightEdge = Ibullet.x+Ibullet.width;
wallLeftEdge = Iwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}