var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("pathh.png");
boyImg = loadAnimation("runner3");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite (200,200);
path.addimage("pathImg");
path.velocityY = 4;
path.scale=1.2;


//Criando menino que corre 
boy = createSprite (200,200);
boy.addimage("runner3");
boy.velocityY = 2;
boy.scale=1;


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(0,0,100,800);
rightBoundary.visible = false;

}


function draw() {
background(0);
path.velocityY = 4;

boy.x = World.mouseX

edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary)
boy.collide(rightBoundary)


 //Reiniciar o fundo
 



 drawSprites();

 }




