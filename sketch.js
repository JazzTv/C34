const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var ground, roof;
var rope;
var Building = [];

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

   ball = new Ball (100,300,40);
   ground = new staticBox (300,590,600,20);
   roof = new staticBox (100,60,50,50);
   rope = new Rope (roof.staticBox,ball.body);
   
   for (var i = 570; i > 100 ; i = i - 50)
   {
     Building.push (new building(300,i,50,50));
   }

}

function draw() {
  background(220,255,255);  
  Engine.update(engine);

  ball.display ();
  ground.display ();
  roof.display ();
  rope.display ();

  for (i = 0; i < Building.length; i++ )
  {
    Building[i].display ();
  }

} 

function mouseDragged ()
{
  Matter.Body.setPosition (ball.body, {x:mouseX , y: mouseY})
} 
