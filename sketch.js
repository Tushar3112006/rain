const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dropsObj = [];
var umbrellaObj;
var maxDrops = 100;
var i;
var thunderFrame = 0;
var thunder1, thunder2, thunder3, thunder4, thunder;

function preload(){
    
    thunder1 = loadImage("image/thunder/1.png");
    thunder2 = loadImage("image/thunder/2.png");
    thunder3 = loadImage("image/thunder/3.png");
    thunder4 = loadImage("image/thunder/4.png");

}

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(400, 400);

   
   
   
    

    if(frameCount % 100 === 0){

      for( i = 0; i < maxDrops; i++){

        dropsObj.push(new Drops(random(0, 400), random(0, 400)));
    
        }

    }
    

    
}

function draw(){
    
    background("black");
    Engine.update(engine);

    
    rand = Math.round(random(1,5));
    if(frameCount%80===0){
       thunderFrame=frameCount;
       thunder = createSprite(random(10,700), random(20,50), 10, 10);
       switch(rand){
        case 1: thunder.addImage("thunder",thunder1);
         break;
        case 2: thunder.addImage("thunder",thunder2);
         break; 
        case 3: thunder.addImage("thunder",thunder3);
         break;
        case 4: thunder.addImage("thunder",thunder4);
         break;
            default: break;
        }
        thunder.scale =1;
    }

if(thunderFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}



    for(i=0; i<maxDrops; i++){

        dropsObj[i].display();
        dropsObj[i].update();

    }

    
    umbrellaObj.display();

    drawSprites();

}   






