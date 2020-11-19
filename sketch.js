
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	hexagon_img = loadImage("Hexagon.png");
}

function setup() {
	createCanvas(1600, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400, 650, 1600, 10);
	ground2 = new Ground(490, 600, 250, 10);
	ground3 = new Ground(900, 500, 250, 10);

	block8 = new Box(400, 570, 30, 40);
	block9 = new Box(445, 570, 30, 40);
	block10 = new Box(490, 570, 30, 40);
	block11= new Box(535, 570, 30, 40);
	block12 = new Box(580, 570, 30, 40);

	block13 = new Box(440, 540, 30, 40);
	block14= new Box(490, 540, 30, 40);
	block15 = new Box(540, 540, 30, 40);

  block16 = new Box(490, 510, 30, 40);

  block17 = new Box(800, 465, 30, 40);
	block18 = new Box(850, 465, 30, 40);
	block19 = new Box(900, 465, 30, 40);
	block20 = new Box(950, 465, 30, 40);
	block21 = new Box(1000, 465, 30, 40);

	block22 = new Box(850, 415, 30, 40);
	block23 = new Box(900, 415, 30, 40);
	block24 = new Box(950, 415, 30, 40);

	block25 = new Box(900, 400, 30, 40);
  





  polygon = Bodies.circle(100, 200, 25);
  World.add(world, polygon);


 

  
  
  
  line1 = new SlingShot(polygon, {x:200, y:400});

	
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground1.display();
  ground2.display();
  ground3.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();

  block25.display();

 

  //console.log(mouseX, mouseY);

  imageMode(CENTER);
  image(hexagon_img, polygon.position.x, polygon.position.y, 40, 40);

 



  

  

  //box1.display();


  
  drawSprites();
 
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
  line1.fly();



}




