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
  background(220);
  fill('green');
  rect(0,350,800,150);
  fill('gray');
  ellipse(100, y, 100, 100);
  for(let i = 25; i < 800; i = i+100) {
    draw_tree(i + random(-15,15), 325 + random(-10,10), 50);
  }
}

function draw() {

  
}
