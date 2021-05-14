
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, box1, box2, box3, leftWall, rightWall, ceiling;

function setup() {
	var canvas = createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(50, 50, 45);
	ground = new Ground(640, 395, 1280, 10);
	box1 = new Box(800, 380, 100, 10);
	box2 = new Box(790, 290, 10, 100);
	box3 = new Box(900, 290, 10, 100);
	leftWall = new Box(-50, 0, 50, 400);
	rightWall = new Box(1330, 0, 50, 400);
	ceiling = new Box(0, -50, 1280, 50);
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y:-15});
	}

	if(keyCode == DOWN_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-15, y:-15});
	}
}


function draw() {
///  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  drawSprites();
  paper.display();	
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  leftWall.display();
  rightWall.display();
  ceiling.display();
}