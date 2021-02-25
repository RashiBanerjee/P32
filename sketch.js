const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var ground1, ground2;
var polygon;
var slingshot;
var score;
var gameState = "play";
var bg1, bg2;
var backgroundImg;

function preload()
{
  getBackgroundImg();

}


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;

ground1= new Ground(300,390,1300,10);

polygon= new Polygon(100,200,30);

slingshot = new Slingshot(polygon.body,{ x:100 , y:170});

box1= new Box(300,350,70,70);
box2= new Box(370,350,70,70);
box3= new Box(440,350,70,70);
box4= new Box(510,350,70,70);
box5= new Box(580,350,70,70);
box10= new Box(650,350,70,70);
box13= new Box(720,350,70,70);

box6= new Box(370,280,70,70);
box7= new Box(440,280,70,70);
box8= new Box(510,280,70,70);
box11= new Box(580,280,70,70);
box14= new Box(650,280,70,70);

box9= new Box(440,210,70,70);
box12= new Box(510,210,70,70);
box15= new Box(580,210,70,70);

box16= new Box(510,140,70,70);

}



function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  drawSprites();

  textSize(20)
  fill("white")
  text("Score:", score, 100,100);

  ground1.display();
  polygon.display();
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "bg1.png";
  }
  else{
      bg = "bg2.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}


  
function mouseDragged()
{
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}



function mouseReleased()
{

slingshot.fly();

}

function keyPressed()
{
if(keyCode === 32)
{
  slingShot.attach(polygon.body);
}

}