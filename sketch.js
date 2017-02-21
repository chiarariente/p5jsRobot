function setup() {
  createCanvas(800, 600);
  background(250);
}

function draw() {
  
  // Neck
  strokeWeight(3);
  stroke(150);
  line(width/2-5,380,width/2-5,200);
  line(width/2+8,380,width/2+8,200);
  line(width/2+21,380,width/2+21,200);

  // Antennas
  strokeWeight(3);
  stroke(150);
  line(width/2-40,150,width/2+8,200);
  line(width/2+50,80,width/2+8,200);
  line(width/2+90,220,width/2+8,200);

  // Body
  fill(150);
  ellipse(width/2-5,height/1.25,80,80);
  fill(0);
  noStroke();
  rect(width/2.5+25,height/1.8,100,150);
  fill(150);
  rect(width/2.5+25,height/1.7,100,8);
  
  // Head
  fill(0);
  ellipse(width/2+8,height/3,110,110);
  fill(255);
  ellipse(width/2+21,height/3.1,30,30);
  fill(150);
  ellipse(width/2-5,height/3.1-5,12,12);
  fill(150);
  ellipse(width/2+25,height/3.1-25,10,10);
  fill(150);
  ellipse(width/2+42,height/3.1+10,8,8);
  fill(0);
  ellipse(width/2+21,height/3.1,8,8);

}