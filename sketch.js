
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1;
var bin2;
var bin3; 
var engine,world;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700,100,100);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper1=new ball(200,450,40);
	
	bin1=new dustbin(1200,540,20,200)
	bin2=new dustbin(1120,630,150,20)
	bin3=new dustbin(1050,540,20,200)
	groundSprite=createSprite(700,650, width,10);
	groundSprite.shapeColor=color("yellow")

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1} );
	World.add(world, ground);
	World.add(world,bin1):
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();


  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}


