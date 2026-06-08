//let skinColor = color(251, 239, 189);

function setup() 
{
  createCanvas(600, 400, WEBGL);


}

function draw()
{
  background(210);

  rectMode(CENTER);
  ellipseMode(CENTER);
  strokeWeight(1);
  point(0,50);
  square(0,180, 40);
  
  //Region Body
  stroke(0);
  strokeWeight(5);
  fill(50);
  rect(0, 102, 150, 190);
  quad(-75,5,     -75,80,   -110,200,   -150,200);
  fill(143, 133, 94);
  quad(-25,0,   25,0,   50,200,   -50,200  )
  
  //Region Arm
  noStroke();
  //fill(skinColor)
  //quad(0,75,   -20,105,   -45,90,   -30,60);
  //arc(-55, 50, 40, 80, -HALF_PI, PI);
  
  fill(50);
  stroke(0);
  strokeWeight(5);
  triangle(75, 5,   75, 120,   120, 110);
  //quad(0, 70,  120,110,   110,150,   -20,110 );
  

  
  //Region Head
  noStroke();
  fill(226, 215, 170);
  rect(0, -10, 50, 80, 30);

  fill(251, 239, 189);
  ellipse(0, -50, 80,100);
  ellipse(40, -50, 10, 20);
  ellipse(-40, -50, 10, 20);
  
  stroke(0); strokeWeight(1);
  circle(-20, -55, 30);
  circle(20, -55, 30);
  line(-5, -55, 5, -55);
  
  strokeWeight(5);
  line(-30, -53, -10, -58);
  line(30, -53, 10, -58);
  
  stroke(245, 197, 199); strokeWeight(7);
  arc(0, -25, 20, 5, 0, PI);
  
  //Region Hair
  
  //Left Parts
  beginShape();
  fill(20);
  noStroke();
  vertex(5,-100);  //Start Anchor Point
  bezierVertex(-15, -80,   -30, -65,   -45, -60);
  bezierVertex(-40, -90,    -15, -130,   5, -100);
  endShape();

  //Right Parts
  beginShape();
  fill(20);
  noStroke();
  vertex(0,-95);  //Start Anchor Point
  bezierVertex(25, -90,    35, -60,    40,-60);
  bezierVertex(45, -90,   25, -130,   5,-100);
  endShape();

  
  fill(50);
  stroke(0);
  strokeWeight(5);
  //quad(0, 70,  120,110,   110,150,   -20,110 );
  //quad(mouseX, mouseY,  120,110,  110,150,   mouseX-20,mouseY+40);
  let pivotX = 120;
  let pivotY = 110;
  translate(pivotX, pivotY);
  angleMode(DEGREES);
  rectMode(CORNER);
  
  let t = (mouseY)/(mouseX);
  let angle = atan(t);
  rotate(angle);
  
  //rect( 50,110, 140, 40);
  rect(0, 0, -140, 40);
  noStroke();
  fill(251, 239, 189);
  rect(-140, 0, -40, 40);
  rect(-140, 0, -10, -20);
  
  if(keyIsPressed)
    {
      if(key === ' ') DrawFlower();
    }
  
}

function keyPressed()
{
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}

function DrawFlower()
{
  push();
  fill(251, 191, 227);
  rotate(0);
  for(let i = 0; i<5; i++)
  {
    let posX = random(-300, 300);
    let posY = random(-200, 200);
  
    ellipse(posX, posY, 50, 20);
  }
  
}
