var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
fruits();
if(gameState===1){
  clear();
  game.play();
}
if(gameState===2){
game.end();
}
if(playerCount===2){
game.update(1);
}
if(keyIsDown(RIGHT_ARROW)&&player.index !== null){
player.distance+=10;
player.velocityX=5;
player.update;

}

if(keyIsDown(LEFT_ARROW)&&player.index !== null){
  player.distance-=10;  
  player.velocityX=-5;
  player.update;
  }
  
drawSprites();
}

function fruits(){
  if(frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.5;
    r=Math.round(random(1,5));
    if (r==1){
      fruit.addImage("fruit1",fruit1_img);
      }
    else if (r==2){
      fruit.addImage("fruit2",fruit2_img);
    }
    else if (r==3){
      fruit.addImage("fruit3",fruit3_img);
    }else if (r==4){
      fruit.addImage("fruit4",fruit4_img);
    }else if (r==5){
      fruit.addImage("fruit5",fruit5_img);
    }
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityY=7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
    
  }
  
}