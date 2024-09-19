function setup() {
  createCanvas(800, 800);
  //setup canvas for html
  canvas = createCanvas(windowWidth,windowHeight);
canvas.style('z-index','-1')
}


function draw() {
  let thickness=dist(mouseX,mouseY,pmouseX,pmouseY);
 background(220,20);

  //fill('#de6000');
  //ellipse(400,400,400);
  //strokeWeight(random(2));
  //fill(random(255), random(255), random(255));

  //if (mouseIsPressed) {
    //ellipse(width / 2, height / 2, 100, 100);
    //ellipse(random(width),random(height),100,100);
    //ellipse(mouseX, mouseY, 10, 10);
    // line(width/2,height/2,300,40);
    //line(mouseX,mouseY,width/2,height/2);
    //strokeWeight(thickness);
    //line(mouseX,mouseY,pmouseX,pmouseY);
  }

