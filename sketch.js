var balls = []; 

function setup() {
  colorMode(HSB, 255, 255, 255, 1);
  createCanvas(displayWidth, displayHeight);
  
  for (var i=0; i<30; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  translate((displayWidth-displayHeight)/2,0,0)
  background(200);
  
  for (var i=0; i<30; i++) {
    balls[i].checkTimer(1);
    balls[i].display();
  }
}

function Ball() {
  this.x = (displayHeight / 6) * (floor(random(1,7))-0.5);
  this.y = (displayHeight / 6) * (floor(random(1,7))-0.5);
  this.diameter = 0;
  this.speed = random(0.2,1);
  this.timer = 0;
  this.maxWidth = displayHeight/6;
  this.growShift = 1;
  
  
  this.checkTimer = function(change) {
    this.timer += change * this.growShift;
    
    if(this.diameter >= this.maxWidth){
      this.growShift = -1;
      this.speed = random(-0.2,-1);
      this.timer = 0;
    } else if (this.diameter < 0){
      this.growShift = 1;
      this.x = (displayHeight / 6) * (floor(random(1,7))-0.5);
      this.y = (displayHeight / 6) * (floor(random(1,7))-0.5);
      this.diameter = 0;
      this.speed = random(0.2,1);
      this.timer = 0;
   }
  }
  
  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}