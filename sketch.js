
let y;
// let tree_arr = new Array()
class Sprite {
  constructor(x,y,size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  draw_tree() {
    fill(222,184,135);
    rect(this.x-(this.size/4),this.y,this.size/2,this.size);
    fill('green');
    triangle(this.x-this.size,this.y,this.x,this.y-this.size*1.5,this.x+this.size,this.y);
    this.size = this.size*0.8;
    triangle(this.x-this.size,this.y-this.size,this.x,this.y-this.size*2.5,this.x+this.size,this.y-this.size);
    this.size = this.size*0.8;
    triangle(this.x-this.size,this.y-this.size/0.8*2,this.x,this.y-this.size*2.5-this.size/0.8,this.x+this.size,this.y-this.size/0.8*2);
  }
}

function setup() {
  createCanvas(800, 500);
  y = 200;
  background(220);
  fill('#A5D4F2');
  rect(0,0,800,500)
  fill('green');
  rect(0,350,800,150);
  fill('gray');
  ellipse(100, y, 100, 100);
  for(let i = 50; i < 800; i = i+120) {
    let tree1 = new Sprite(i+random(-15,15),330+random(-10,10),50);
    tree1.draw_tree();
  }
  
}

function draw() {

  
}
