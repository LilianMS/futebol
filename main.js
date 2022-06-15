var box, campo,bola,campoImg,bolaImg, edges, barE;

function preload(){
    campoImg = loadImage("campo.png");
    bolaImg = loadImage("bola.png");
    soundFormats("mp3", "ogg");
    mySound = loadSound("pedrinho.mp3");
    
}



function setup(){
createCanvas(600,600);

campo = createSprite(300,300);
campo.addImage(campoImg);
campo.scale = 1.5;

box = createSprite(300,300,30,30);

bola = createSprite(300, 300);
bola.addImage(bolaImg);
bola.scale = 0.1;
bola.velocityX= 0;
bola.velocityY= 0;

barE = createSprite(100,0,220,10);
barD = createSprite(500,0,220,10);

edges = createEdgeSprites();

}



function draw(){

background("black");
if(keyDown("right")){
    box.x += 5;
} else if(keyDown("left")){
    box.x -= 5;
} else if(keyDown("up")){
    box.y -= 5;
} else if(keyDown("down")){
    box.y += 5;
}

if(keyDown("space")){
    bola.velocityX= 2;
    bola.velocityY= -2;
}
//bola.bounceOff(edges);
bola.bounceOff(barE);
bola.bounceOff(barD);
bola.bounceOff(edges);
bola.bounceOff(box);



if(bola.isTouching(edges[2])){
    gol();
    bola.y = 300;
    bola.x = 300;
    bola.velocityX = 0;
    bola.velocityY = 0;
}


drawSprites();
}

function gol() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    mySound.play();
  }