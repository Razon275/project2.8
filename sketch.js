
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6;
var tree1,slingshot,treeImage;
var gameState;
function preload()
{
	boyImage=loadImage("sprites/boy.png");
   
}

function setup() {
	createCanvas(1200, 800);
	
    boy=createSprite(300,600,1,1)
	boy.addImage(boyImage)
	boy.scale=0.2
	engine = Engine.create();
	world = engine.world;
    slingshot=new Chain(boy,{x:300,y:600})
	//Create the Bodies Here.
	tree1=new Tree(500,100,50,50)
	
	mango1=new Mango(800,100,30)
	mango2=new Mango(200,200,30)
	mango3=new Mango(300,300,30)
	mango4=new Mango(400,300,30)
	mango5=new Mango(550,250,30)
	mango6=new Mango(500,150,30)
	
	
	Engine.run(engine);
  
}


function draw() {
  //Engine.update(engine)
  rectMode(CENTER);
  background(255);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  tree1.display();
  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}


