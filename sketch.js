let img; 
var x;
var y;
var height;
var width;
let img2;
var k;
var j;
var s;

function preload()
{
   s = loadSound('so.mp3');
}

function setup() {
  height=700;
  width=window.innerWidth;
  s.loop();
  k=0;
  j=1;
  createCanvas(width,height);
  img= loadImage("sakura2.png");
  img2=loadImage("l.jpg");
  x=60;
  y=60;  
}

function draw() {
  background(143,201,163);
  stuff();
}

function stuff()
{
  background(143,201,163);
  imageMode(CENTER);
  image(img, x, y, 50, 50);

  
  if((mouseX>(x-40)&&mouseX<(x)) && mouseY>(y)&&mouseY<(y+40))
    {
      x+=20;
      y-=30;
    }
   
  if((mouseX>(x)&&mouseX<(x+40)) && mouseY>(y)&&mouseY<(y+40))
    {
      x-=20;
      y-=10;
    }
  if((mouseX>(x-40)&&mouseX<(x)) && mouseY<(y)&&mouseY>(y-40))
  {
    x+=20;
      y+=10;
  }
  if((mouseX>(x)&&mouseX<(x+40)) && mouseY<(y)&&mouseY>(y-40))
    {
        x-=20;
       y+=10;
    }
  
  y++;
   if(y>height)
    {end();}
  if(x>width)
    {x=0;}
  if(x<0)
    {x=1250;}
  
}

function down()
{ 
 y+=50;
 if(y>height)
    {y=0;}
}

function end()
{
  k+=1;
 
  image(img2, width/2, height/2, width, height);
   text("woops try again",100, 300);
  blow()
}

function blow()
{
  b= createButton('retry');
  b.position(150, 300);
  b.mouseClicked(reset);
}

function reset()
{
 j=j+1;
 
}
