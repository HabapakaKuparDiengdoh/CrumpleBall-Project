
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1;
var bin2;
var bin3; 
var bin4;
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
	
	bin1=new dustbin(1250,540,20,200)
	bin2=new dustbin(1150,630,250,20)
	bin3=new dustbin(1000,520,20,250)
	bin4=new dustbin(1200,500,300,300);
	groundSprite=createSprite(700,650, width,10);
	groundSprite.shapeColor=color("yellow")

	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1} );
	World.add(world, ground);
	World.add(world,bin1);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
bin4.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}


