function setup() {

  createCanvas(600, 400);
  frameRate(120);
}


function draw() {
  
  let MikuColor = color(57, 197, 187);
  let MikuLight = color(155, 203, 200);
  let MikuCloth = color(42, 46, 50);
  let GundamBlue = color(102, 155, 212);
  let GundamRed = color(230, 64, 49);
  let GundamYellow = color(246, 193, 45);
  let GundamWhite = color(239, 245, 238);
  let ZeongHead = color(140, 141, 165);
  let SakuraMiku = color(240, 190, 209);
  let SakuraLight = color(255, 229, 238);

  //Background Region
  background(100);
  noStroke();
  fill(MikuColor);
  triangle(0,0,  600,0,  0,250);
  triangle(0,0, 600,0, 600,250);
  
  
  //Gundam Region
  fill(GundamWhite);
  stroke(50);
  quad(260,280,  340,280,  360,380,  240,380);
  
  noStroke();
  fill(GundamBlue);
  circle(300, 320, 80);
  
  stroke(GundamRed);  
  strokeWeight(20);
  arc(300, 315, 80, 100, radians(20), radians(160));
  
  stroke(GundamYellow);  
  strokeWeight(10);
  line(290, 310, 270, 300);
  line(310, 310, 330, 300);
  
  //Laser Region
  let t = millis() / 200;
  let l = -5*sin(t);
  let x = 40*sin(t);
  let y = 5*sin(t);
  
  stroke(230, 49, 194);
  //strokeWeight(25);
  strokeWeight(25+l);
  line(260, 270, 260, 100);
  
  noFill();
  strokeWeight(10);
  //ellipse(260, 180, 400, 20);
  ellipse(260, 180, 380+x, 20+y);

  //Zeong Region
  stroke(GundamRed);
  strokeWeight(15);
  arc(270, 50, 150, 15, radians(-5), radians(185));
  fill(ZeongHead);
  stroke(30);
  strokeWeight(5)
  circle(270, 60, 70);
  strokeWeight(30);
  stroke(249, 155, 204);
  point(270, 60)
  
  
  //Frame Calculate
  let cf = frameCount % 120;
  let pc = 0;
  let fillColorFrom = color(0,0,0);
  let fillColorTo = color(0,0,0);
  let strokeColorFrom = color(0,0,0);
  let strokeColorTo = color(0,0,0);
  
  if(cf < 60) {
    fillColorFrom = color(MikuLight);
    fillColorTo = color(SakuraLight);
    strokeColorFrom = color(MikuColor);    
    strokeColorTo = color(SakuraMiku);
    pc = cf/60;
  }
  else if(cf >= 60) {
    fillColorFrom = color(SakuraLight);
    fillColorTo = color(MikuLight);
    strokeColorFrom = color(SakuraMiku);    
    strokeColorTo = color(MikuColor);
    pc = (cf-60)/60;
  }
  //Miku Collaboration
  let interColor = lerpColor(fillColorFrom, fillColorTo, pc);
  fill(interColor);
  
  stroke(MikuCloth);
  strokeWeight(3);
  quad(85,310,  95,310,  70,365,  110,365);  
  quad(515,310,  505,310,  530,365,  490,365);  
  
  let interStroke = lerpColor(strokeColorFrom, strokeColorTo, pc);
  stroke(interStroke);
  strokeWeight(5);
  quad(70,280,  40,360,  110,280,  140,360);
  quad(530,280,  560,360,  490,280,  460,360);

  
  //fill(MikuLight);
  stroke(MikuColor);
  strokeWeight(5);


}

function keyPressed()
{
  if (key === 's') {
    saveGif('mySketch', 6);
  }
}

/*
Color Methods :
- noFill()
- noStroke()
- fill(color)
- stroke(color)
- strokeWeight(thick)

Basic diagram Methods :
- arc (center_x, center_y, startLength, midLength, startRadian, endRadian)
- circle (center_x, center_y, r)
- ellipse (center_x, center_y, w, h)
- line (start_x, start_y, end_x, end_y)
- point (x, y)
- quad (x0, y0, x1, y1, x2, y2, x3, y3)
- rect(x, y, w, h)
- square(x, y, size)
- triangle(x0, y0, x1, y1, x2, y2)
*/