let bubbles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);

  for (var i = 0; i < 5; i++) {
    bubbles[i] = new Bubble();
  }
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(10, 25);
  this.col = color(255);

  this.changeColor = function () {
    this.col = color(random(255), random(255), random(255));
  };
  this.display = function () {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.intersects = function (other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  };

  this.update = function () {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  };
}

// color change code help from The Coding Train / Daniel Shiffman
