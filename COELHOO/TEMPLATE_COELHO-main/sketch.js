const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var link;

function preload () {

}

function setup() {

  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250, 690, 600, 20);
  rope = new Rope(7, {X: 250, y: 40});

  var opcoesdafruta = {
    density: 0.001
  }
  fruit = Bodies.circle(300 ,300, 15, opcoesdafruta)
  Composite.add(rope.body, fruit)

  link = new Link(rope, fruit)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {

  background(51);
  Engine.update(engine);
  rope.show();
  ellipse(fruit.position.x, fruit.position.y, 15,)
   
}




