const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(500,390,1000,20,ground_options);
    World.add(world,ground);

    groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color(255)

    Matter.Body.create(200,200,200,20,ground_options);
    groundSprite.shapeColor=color(255)

   ground2 = Bodies.rectangle(200,800,200,20,ground_options);
   ground2.shapeColor=color("red")
   World.add(world,ground2);

   ground3Sprite=createSprite(200, 200, 200,20,ground_options);
   ground3Sprite.shapeColor=color(255,0,0)




   
   ground4 = Bodies.rectangle(390, 650, 20, 100 , {isStatic:true} );
   World.add(world, ground4);

   ground5 = Bodies.rectangle(390, 650, 20, 100 , {isStatic:true} );
   World.add(world, ground5);

   ground6 = Bodies.rectangle(390, 650, 20, 100 , {isStatic:true} );
   World.add(world, ground6);


   ground3 = Bodies.rectangle(390, 650, 200, 20 , {isStatic:true} );
   World.add(world, ground3);
     
    var ball_options ={
        restitution : 0.5
    }
    ball = Bodies.circle(50,350,20,ball_options);
    ball.shapeColor=color("red")
    World.add(world,ball);
    
    console.log(ground);
}

function draw(){
    background(255);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1000,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,500,20);
    /*ground2.display();*/
}