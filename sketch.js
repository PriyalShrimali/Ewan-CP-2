const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paperball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,560,1200,10)
	paperball=new paper(55,500,75)


	box2=new dustbin(605,150,250,400);

	Engine.run(engine);
  
}


function draw() {
  
  background("white");

  Engine.update(engine);
  
  ground.display();

 paperball.display();

 box2.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:400,y:-1500});
   }
   
   }


