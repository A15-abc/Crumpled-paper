const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var left_wall, right_wall, ground
var ball;

var btn1, btn2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  left_wall = new Wall(390,362,10,60)
  right_wall = new Wall(490,362,10,60)
  ground = new Wall(200,390,1300,10)

  var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2,
  }
  ball = Bodies.circle(200, 100, 20, ball_options)
  World.add(world, ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  left_wall.show()
  right_wall.show()
  ground.show()
  top_wall.show()

  push()
  ellipseMode(RADIUS);
  fill("skyblue")
  ellipse(ball.position.x, ball.position.y, 20, 20)
  pop()
}


function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:-0.05})
}


