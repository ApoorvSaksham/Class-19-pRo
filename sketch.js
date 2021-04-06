var bg, bgImage
var boy, boyAnim;
var plant, plantImage;
var plant2, plant2Image;
var iGround;
var coin, coinImage;
var diamond, diamondImage;
var plantGrp, plant2Grp;
var diamondGrp, coinGrp;
 var PLAY = 1;
 var END = 0;
 var gameState = PLAY;

function preload(){
bgImage = loadImage("gamebg.png");
boyAnim = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png"
,"images/boy7.png","images/boy8.png","images/boy9.png","images/boy10.png","images/boy11.png");
plantImage = loadAnimation("images/pl1.png","images/pl2.png","images/pl3.png","images/pl4.png");
plant2Image = loadAnimation("images/plant1.png","images/plant2.png","images/plant3.png","images/plant4.png");
coinImage = loadImage("coin.png");
diamondImage = loadImage("blue.png");

}

function setup() {
canvas = createCanvas(1100,500);
background("black");

 bg = createSprite(980,295,1100,500);
 bg.addImage("bgImg",bgImage);
 bg.scale = 1.475;
 bg.velocityX = -6;

 boy = createSprite(70,407,10,10);
 boy.addAnimation("boyAnimation",boyAnim);
 boy.scale = 0.58;
 boy.debug = false;
 boy.setCollider("rectangle",0,0,185,300);

 iGround = createSprite(550,492,1100,25);
 iGround.visible = false;
 
 plantGrp = createGroup();
 plant2Grp = createGroup();
 diamondGrp = createGroup();
 coinGrp = createGroup();


}

function draw() {

if(gameState === PLAY){


 if(bg.x < 100){
  bg.x = 900;
 }

 boy.collide(iGround);
 if(keyDown("space") && boy.y >380 ){
     boy.velocityY =  - 20;
 }

 boy.velocityY = boy.velocityY + 1;

 plants();
 coins();
 diamonds();

 if(plantGrp.isTouching(boy)){
     gameState = END;
 }

 if(plant2Grp.isTouching(boy)){
    gameState = END;
}

if(coinGrp.isTouching(boy)){
    coinGrp.destroyEach();
}

if(diamondGrp.isTouching(boy)){
    diamondGrp.destroyEach();
}
}
else if(gameState === END){
    bg.velocityX = 0;
    bg.velocityY = 0;
}
 drawSprites();

}

function plants(){
    var select = Math.round(random(1,2));
    if(frameCount%100===0){
    switch(select){
        case 1: plant = createSprite(1100,470,10,10);
                plant.addAnimation("plantAnim",plantImage);
                plant.velocityX = -6;
                plant.scale = 0.72;
                plant.lifetime = 500;
                plant.debug = false;
                plant.setCollider("rectangle",0,0,100,268);
                plantGrp.add(plant);
        break;

        case 2: plant2 = createSprite(1100,420,10,10);
                plant2.addAnimation("plantAnim",plant2Image);
                plant2.velocityX = -6;
                plant2.scale = 0.26;
                plant2.lifetime = 500;
                plant2.debug = false;
                plant2.setCollider("rectangle",0,0,312,460);
                plant2Grp.add(plant2);
        default:
        break;
    }


}
}

function coins(){
    if(frameCount%230===0){
        coin = createSprite(1100,290,10,10);
        coin.addImage("coinPic",coinImage);
        coin.scale = 0.64;
        coin.velocityX = -6;
        coin.lifetime = 500;
        coinGrp.add(coin);
        
    }
}

function diamonds(){
    if(frameCount%325===0){
        diamond = createSprite(1100,290,10,10);
        diamond.addImage("diamondPic",diamondImage);
        diamond.scale = 0.18;
        diamond.velocityX = -6;
        diamond.lifetime = 500;
        diamond.debug = false;
        diamond.setCollider("rectangle",0,0,280,240);
        diamondGrp.add(diamond);

    }
}