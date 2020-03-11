
var r = 0;
var g = 50;
var b=255;
var circle;

function setup(){
  createCanvas(1200,400);
}


function draw(){
  
 background(r,g,b);
  
 r=map(mouseX,0,1070,9,213);
  
 g=map(mouseX,0,1010,60,421);
  
 b=map(mouseX,0,1000,660,156);
 
  fill('white');
  circle=ellipse(mouseX,mouseY,55);
  }