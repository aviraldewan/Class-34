const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box = [];
var ball,rope1;

function preload()
{
    
}

function setup()
{
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,600,1200,20);

    for (var i = 0; i < 12; i++)
    {
        if(i <= 5)
        {
        box[i] = new Box(900,100,70,70);
        }
        else if(i <= 11)
        {
        box[i] = new Box(800,100,70,70);
      
        }
        else{
        box[i] = new Box(700,100,70,70);
        }
    }

    ball = new Ball(200,200,80,80);
    rope1 = new Rope(ball.body,{x:500,y:50});

}

function draw()
{
    background('black');
    Engine.update(engine);

for(var i = 0; i < 12; i++)
{
    box[i].display();
}

ball.display();
rope1.display();

}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}