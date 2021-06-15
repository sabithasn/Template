const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,40)

    box1 = new Box(280,450,40,280);
    box6 = new Box(310,480,100,240);
    box2 = new Box(420,520,100,160);
    box7 = new Box (530,450,100,300);
    box3 = new Box(640,520,100,160);
    box4 = new Box(750,480,100,240);
    
    box5 = new Box(775,450,40,280);
    
  
}

function draw(){
    background("lightblue");
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();


    box3.display();
    box4.display();
    box6.display();
    box5.display();
    box7.display();
    fill ("darkblue");
    //triangle (260,360, 310, 230, 360, 360);
    triangle (270,340, 330, 210, 390, 340);
    triangle (460,290, 530, 70, 600, 290);
    triangle (670,340, 730, 210, 790, 340);

}