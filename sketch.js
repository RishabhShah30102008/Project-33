var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(25);
  text(" 500 ", 12, 550);
  text(" 500 ", 87, 550);
  text(" 500 ", 167, 550);
  text(" 500 ", 247, 550);
  text(" 100 ", 327, 550);
  text(" 100 ", 407, 550);
  text(" 100 ", 487, 550);
  text(" 200 ", 567, 550);
  text(" 200 ", 647, 550);
  text(" 200 ", 727, 550);
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(50);
    text("GameOver", 350, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
        
        if (ball.body.position.y>760)
        {
              if (ball.body.position.x < 300) 
              {
                  score=score+500;      
                  ball=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
              {
                    score = score + 100;
                    ball=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
              {
                    score = score + 200;
                    ball=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     ball=new Ball(mouseX, 10, 10, 10); 
  }   
}