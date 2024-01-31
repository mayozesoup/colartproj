let y;
let tree_arr = new Array();

class Sprite {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  draw_tree() {
    fill(222, 184, 135);
    rect(this.x - (this.size / 4), this.y, this.size / 2, this.size);
    fill('green');
    triangle(this.x - this.size, this.y, this.x, this.y - this.size * 1.5, this.x + this.size, this.y);
    this.size = this.size * 0.8;
    triangle(this.x - this.size, this.y - this.size, this.x, this.y - this.size * 2.5, this.x + this.size, this.y - this.size);
    this.size = this.size * 0.8;
    triangle(this.x - this.size, this.y - this.size / 0.8 * 2, this.x, this.y - this.size * 2.5 - this.size / 0.8, this.x + this.size, this.y - this.size / 0.8 * 2);
  }
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
  fill('#67AFE1');
  rect(0,0,800,500);
  
  // Draw mountains
  fill('#C0C0C0');
  let x_offset = random(-15,15);
  let y_offset = random(-15,15);
  triangle(0 + x_offset, 350 + y_offset, 200 + x_offset, 100 + y_offset, 400 + x_offset, 350 + y_offset);
  x_offset = random(-15,15);
  y_offset = random(-15,15);
  triangle(200 + x_offset, 350 + y_offset, 400 + x_offset, 130 + y_offset, 600 + x_offset, 350 + y_offset);
  x_offset = random(-15,15);
  y_offset = random(-15,15);
  triangle(400 + x_offset, 350 + y_offset, 600 + x_offset, 200 + y_offset, 800 + x_offset, 350 + y_offset);
  
  // Draw sun
  fill('yellow');
  circle(random(700-15,700+15), random(100-15,100+15), 80);
  
  // Draw grass
  fill('green');
  rect(0, 350, 800, 150);
  
  // Draw trees
  for (let i = 50; i < 800; i = i + 120) {
    let tree1 = new Sprite(i + random(-15, 15), 330 + random(-10, 10), 50);
    tree1.draw_tree();
  }
}
