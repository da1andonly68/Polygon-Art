var W = window.innerWidth;
var H = window.innerHeight;
var polys = 300;
var polygons = new Array(polys);
var polyCount = 0;

var movementSpeed = 1 / 5;

function setup() {
   createCanvas(W, H);
   background(0);
   for(var i = 0; i < polys; i++){
      polygons[i] = new Poly();
  }
}


function draw() {
  for(var i = 0; i < polys; i++){
      polygons[i].update();
      polygons[i].show();
      
  }
}

function Poly(){
   
   //center vector
   this.x0 = floor(random(W));
   this.y0 = floor(random(H));
   //top left corner
   this.x1 = floor(random(this.x0));
   this.y1 = floor(random(this.y0));
   //top right Corner
   this.x2 = floor(random(W - this.x0)) + this.x0;
   this.y2 = floor(random(this.y0));
   //bottom right corner
   this.x3 = floor(random(W - this.x0)) + this.x0;
   this.y3 = floor(random(H - this.y0)) + this.y0;
   //bottom left corner
   this.x4 = floor(random(this.x0));
   this.y4 = floor(random((H - this.y0))) + this.y0;  
   
   //behavior 
   this.action = floor(random(5));
   
   //Color based off inital coordinates
   this.r = 225 * this.x0 / W;
   this.g = 225 - (225 * this.x0 / W);
   this.b = 225 * this.y0 / H;
   this.a = floor(random(70)) + 10;
   
   this.show = function(){
     fill(this.r, this.g, this.b, this.a);
     noStroke();
     beginShape();//TL, TR, BR, BL
       vertex(this.x1, this.y1);
       vertex(this.x2, this.y2);
       vertex(this.x3, this.y3);
       vertex(this.x4, this.y4);
     endShape();
   };
   
   this.update = function(){
      this.behavior();
   };
   
   this.behavior = function(){
      if(this.action === 0){
        //Do nothing
      }else if(this.action === 1){
         return this.chase(); 
      }else if(this.action === 2){
         return this.flee(); 
      }else if(this.action === 3){ 
        //Do nothing
      }else if(this.action === 4){
         return this.shrink(); 
      }
   };
   this.movementSpeedX = random(0.2);
   this.movementSpeedY = random(0.2);
   this.chase = function(){
       //chase mouse
      if(mouseX > this.x0){
       this.x1 += this.movementSpeedX; 
       this.x2 += this.movementSpeedX;
       this.x3 += this.movementSpeedX;
       this.x4 += this.movementSpeedX;
      }else if(mouseX < this.x0){
       this.x1 -= this.movementSpeedX;
       this.x2 -= this.movementSpeedX;
       this.x3 -= this.movementSpeedX;
       this.x4 -= this.movementSpeedX;
     }
      if(mouseY > this.y0){
       this.y1 += this.movementSpeedY; 
       this.y2 += this.movementSpeedY;
       this.y3 += this.movementSpeedY;
       this.y4 += this.movementSpeedY;
      }else if(mouseX < this.y0){
       this.y1 -= this.movementSpeedY;
       this.y2 -= this.movementSpeedY;
       this.y3 -= this.movementSpeedY;
       this.y4 -= this.movementSpeedY;
     }
   };
   
    this.flee = function(){
       //flee mouse
      if(mouseX > this.x0){
       this.x1 -= this.movementSpeedX; 
       this.x2 -= this.movementSpeedX;
       this.x3 -= this.movementSpeedX;
       this.x4 -= this.movementSpeedX;
      }else if(mouseX < this.x0){
       this.x1 += this.movementSpeedX;
       this.x2 += this.movementSpeedX;
       this.x3 += this.movementSpeedX;
       this.x4 += this.movementSpeedX;
     }
      if(mouseY > this.y0){
       this.y1 -= this.movementSpeedY;
       this.y2 -= this.movementSpeedY;
       this.y3 -= this.movementSpeedY;
       this.y4 -= this.movementSpeedY;
      }else if(mouseX < this.y0){
       this.y1 += this.movementSpeedY;
       this.y2 += this.movementSpeedY;
       this.y3 += this.movementSpeedY;
       this.y4 += this.movementSpeedY;
     }
   };
   this.c1Speed = random(1);
   this.c2Speed = random(1);
   this.c3Speed = random(1);
   this.c4Speed = random(1);
   this.shrink= function(){
      this.x1 += this.c1Speed;
      this.y1 += this.c1Speed;
      this.x2 -= this.c2Speed;
      this.y2 += this.c2Speed;
      this.x3 -= this.c3Speed;
      this.y3 -= this.c3Speed;
      this.x4 += this.c4Speed;
      this.y4 -= this.c4Speed;
   };
}
