let y, direction;
function draw_tree(x,y,size){
  fill('brown');
  rect(x-(size/4),y,size/2,size)
  fill('green')
  triangle(x-size,y,x,y-size*1.5,x+size,y)
  size = size*0.8
  triangle(x-size,y-size,x,y-size*2.5,x+size,y-size)
  size = size*0.8
  triangle(x-size,y-size/0.8*2,x,y-size*2.5-size/0.8,x+size,y-size/0.8*2)
}
function setup() {
  createCanvas(800, 500);
  y = 200;
  direction = true;
}

function draw() {
  background(220);
  fill('green');
  rect(0,350,800,150);
  fill('gray');
  ellipse(100, y, 100, 100);
  draw_tree(400,250,100);
  
}
