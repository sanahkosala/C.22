//Create namespace for Engine
const Engine = Matter.Engine
//Create namespace for World
const World = Matter.World
//Create namespace for Bodies
const Bodies = Matter.Bodies
//Create namespace for Body
const Body = Matter.Body

var engine , world


function setup() {
  createCanvas(400,400);
//create the engine
 engine = Engine.create()
  //Add world to the engine
  world = engine.world

  
   var ball_options = {
    restitution: 0.5,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground=Bodies.rectangle(200,380,800,20,ground_options)
  World.add(world,ground)
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,800,20)


  
  
}

