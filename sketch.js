var speed, weight, bullet, wall, thickness;


function setup() { 
  createCanvas(1600,400);

   speed=random(223,321);
   weight=random(30,52); 
  bullet = createSprite(50, 200, 50, 10  );
   bullet.velocityX=speed;
   bullet.shapeColor="white"
    wall=createSprite(1200, 200, thickness, height/2);
    thickness=random(22,83)
  
  
  
  }





function draw() {
  background(0,0,0);  


if(hc(bullet,wall))
{

bullet.velocityX=0;
var d=0.5 * weight * speed* speed/(thickness *thickness *thickness)

if(d>10)
{

wall.shapeColor=color(255,0,0);

}

if(d<10)
{

wall.shapeColor=color(0,255,0);

}


}







  drawSprites();
}


function hc(Ibullet,Iwall){

bulletRightEdge=Ibullet.x +Ibullet.width;
wallLeftEdge=Iwall.x;


if(bulletRightEdge>=wallLeftEdge){

return true 

}

return false;


}





