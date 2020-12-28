var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 400, 50, 80);
  rect1.shapeColor = 'green';

  rect2 = createSprite(400,100,30,50);
  rect2.shapeColor = 'green';
}

function draw() {
  background(0);  

  rect2.x = World.mouseX;
  rect2.y = World.mouseY;
  
  //to detect the collision between two rectangles 
  if (rect2.x-rect1.x < rect1.width/2+rect2.width/2 && 
      rect1.x-rect2.x < rect1.width/2+rect2.width/2 &&
      rect2.y-rect1.y < rect1.height/2+rect2.height/2 &&
      rect1.y-rect2.y < rect1.height/2+rect2.height/2) {
    rect2.shapeColor = 'blue'
    rect1.shapeColor = 'blue'
  }

  //if the upper code is not working then remain the color green of the rectangles
  else {

    rect2.shapeColor = 'green';
    rect1.shapeColor = 'green';

  }

  drawSprites();
}