let y, direction;
function draw_tree(){
  
}
function setup() {
  createCanvas(800, 500);
  y = 200;
  direction = true;
}

function draw() {
  background(220);
  fill('green')
  rect(0,350,800,150);
  fill('gray')
  ellipse(100, y, 100, 100);
  
}
