var ball,groundObj,rightSide,leftSide,world ;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	balls_options={
		isStatic : false,
		restitution :0.3,
		fraction : 0,
		density : 1.2 
	  }

	  ball=Bodies.circle(200,100,20,balls_options);

	  World.add(world,ball);
	  

	 

	  groundObj= new Ground (width/2,670,width,20);
leftSide= new Ground (1100,600,20,120);
rightSide= new Ground (1400,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update (engine);
  ellipse(ball.position.x,ball.position.y,20,20);
  groundObj.display();
leftSide.display();
rightSide.display();
 
}

function keyPressed (){

	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce (ball,ball.position,{x:85,y:-85});
	}

}



