var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper,b3,ground,b1,b2;
var b4,tp1;
var aimg


function preload(){
	aimg = loadImage("dustbin.png")
}


function setup() {
	createCanvas(800, 400);

	
	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	paper = new Paper(50,100,70)

	ground = new Ground(width/2,380,width,10,{isStatic:true})
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	 
	 b3 = new Boxes(670,370,150,20);
	 b1 = new Boxes(740,300,20,150);
	 b2 = new Boxes(600,300,20,150);

	 st = new Launcher(paper.body,{x:150, y:300})

	Engine.run(engine);
	

	

}


function draw() {
  rectMode(CENTER);
  background("#AFEEEE");
  
  drawSprites();
 st.display();
 ground.display();
 //b3.display();
 //b2.display();
 //b1.display();
 
 paper.display();

 var tp1 = createSprite(670,300,200,150);
 tp1.addImage(aimg)
 tp1.scale=0.5;
 
 st.display();

 keyPressed();
}


function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    st.fly();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
	}
}