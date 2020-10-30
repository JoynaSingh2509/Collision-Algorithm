var f,m;

function setup() {
  createCanvas(800,400);
  f=createSprite(400, 200, 80, 50);
  m=createSprite(200, 200, 50, 80);
}

function draw() {
  background(255,255,255);  

  m.x=mouseX;
  m.y=mouseY;

  if(m.x-f.x<m.width/2+f.width/2&&f.y-m.y<m.height/2+f.height/2&&m.y-f.y<m.height/2+f.height/2&&f.x-m.x<m.width/2+f.width/2){
    f.shapeColor="red";
    m.shapeColor="red";
  }
  else{
    f.shapeColor="green";
    m.shapeColor="green";
  }
  drawSprites();
}
