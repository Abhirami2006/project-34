const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var backgroundImg;

function preload() {
  backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  var canvas = createCanvas(3000,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,500,1000,20);
  hero = new Hero(400,400,500,170);
  fly = new Fly(hero.body,{x:400,y:400});



}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

