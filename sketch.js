var leftbox,bottombox,rightbox;
var ground;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Ball = Ball.Ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	paper = new Paper(200,625,20);

	//ellipse(56, 46, 55, 55);

	leftbox=createSprite(300,620,20,100);
	leftbox.shapeColor = color("red");
	//Matter.Body.setStatic(leftbox, true);

	bottombox=createSprite(width/2,650,200,20);
	bottombox.shapeColor = color("red");
 	//Matter.Body.setStatic(bottombox, true);

	rightbox=createSprite(500,620,20,100);
	rightbox.shapeColor = color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 keypressed();
 console.log(paper.body.position.x);
}

function keypressed(){
		if (keyCode === UP_ARROW){
			var paperpos = paper.body.position;
			Matter.Body.applyForce(paper.body,paper.paperpos, {x: 20, y: 20})
	  }	

	}
