const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600,height-1,1200,1)
  cannon = new Cannon(180,110,110,50,-PI/4)
  
}

function draw() {
  background(189);
  image(backgroundImg, width/2, height/2, width, height);

  

  Engine.update(engine);
  ground.display();
  

  tower.display();
  cannon.display()
 
}







