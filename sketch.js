const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var drops = [];
var maxDrops = 100;
var Thunder;
var thunder1,thunder2,thunder3,thunder4;
var thunderbolt;
var thunderCreatedFrame = 0;

function preload(){
   // thunder1 = loadImage("thunderbolt/1.png");
   // thunder2 = loadImage("thunderbolt/2.png");
   // thunder3 = loadImage("thunderbolt/3.png");
   // thunder4 = loadImage("thunderbolt/4.png");

   Thunder = loadAnimation("th1.png","th2.png","th3.png","th4.png");
  
}

function setup(){
    createCanvas(500,700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,550);
    thunderbolt = createSprite(220,20,130,230);
    thunderbolt.addAnimation(Thunder);

    for(var i=0; i<maxDrops; i++){
        drops.push(new CreateDrops(random(0,400),random(0,400)));
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    umbrella.display();
    thunderbolt.display();
    
}   

