const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;
var ball2;
var ball3;

function setup(){
var canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;
                            
var ground_options={
    isStatic:true
}
ground=Bodies.rectangle(200,380,400,40,ground_options);

World.add(world,ground);

var ball_options={
  restitution:1.4
}
ball=Bodies.circle(200,200,20,ball_options);
World.add(world,ball);

var ball2_options={
    restitution:1.3
}
ball2=Bodies.circle(220,150,10,ball2_options);
World.add(world,ball2);

var ball3_options={
restitution:1.5
}
ball3=Bodies.circle(200,150,30,ball3_options);
World.add(world,ball3);

}
function draw(){
    background("blue");
    Engine.update(engine);
    fill("pink");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,40);

    fill("green");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);

    fill("orange");
    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20);

    fill("white");
    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,30);
}