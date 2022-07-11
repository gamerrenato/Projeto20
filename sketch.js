
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
	   isStatic: true		
	} 

	var particle_options ={
		restitution:0.4,
		friction:0.02
	}
	
	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	isStatic: true

	particle2 = Bodies.circle(220,10,10,particle2_options);
	World.add(world,particle2);
	isStatic: true

	particle3 = Bodies.circle(220,10,10,particle3_options);
	World.add(world,particle3);
	isStatic: true
	
	Engine.run(engine);
}

function draw() {
fill();
rectMode(CENTER);
ellipseMode();
background(0);

Engine.update(engine);

var rotator_options = {
	rotator: true
}

rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator1);

Matter.Body.rotate(rotator1,angle1)
push();
translate(rotartor1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1 +=0.2;

rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator2);

Matter.Body.rotate(rotator2,angle2);
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2 +=0.2;

rotartor3 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotartor3);

Matter.Body.rotate(rotartor3,angle3);
push();
translate(rotartor3.position.x,rotartor3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3 +=0.2;
 
 drawSprites();
}