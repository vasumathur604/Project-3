var yolo,yoloWave,yoloStand;
var yoloWalk1,yoloWalk2,yoloWave3;
var yoloFly;
var sky;
//var gameState="play";
function preload(){

    yoloWave=loadImage("IMAGES/wave.png")
    yoloStand=loadImage("IMAGES/stand.png")
    landImg=loadImage("IMAGES/land.png")
    cloudImg=loadImage("IMAGES/cloud1.png")
 }
function setup(){
    createCanvas(1100,694)
    
//sprites
ground=createSprite(550,644,2200,12)
ground.addImage("moving land",landImg)
ground.scale=1.2

yolo=createSprite(200,549)
yolo.addImage("wave",yoloWave)
yolo.scale=0.30

}

function draw(){
    background("#00A5E3")

    ground.velocityX=-6

if (ground.x <0){
    ground.x = ground.width/2;
  }
  
  multicloud();

  drawSprites();
  }
  
  
  // mutiple jet
  function multicloud(){
      if(frameCount % 60===0){
          
  var cloud=createSprite(40,150)
      cloud.addImage(cloudImg);
      cloud.scale=0.35
  
      cloud.debug=true;
  cloud.velocityX=-6
  cloud.y=Math.round(random(60,250))
  
  cloud.setCollider("rectangle",0,0,290,50)
  cloud.lifetime=1581
  
  //cloudGroup.add(cloud); 
  }
  
  }
  
 