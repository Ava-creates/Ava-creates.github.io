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

class petal
{
   constructor(x,y)
   {
      this.x=x;
      this.y=y;
   }
   
 

  fall()
   {
         if((mouseX>(this.x-40)&&mouseX<(this.x)) && mouseY>(this.y)&&mouseY<(this.y+40))
    {
      this.x+=20;
      this.y-=30;
    }
   
  if((mouseX>(this.x)&&mouseX<(this.x+40)) && mouseY>(this.y)&&mouseY<(this.y+40))
    {
      this.x-=20;
      this.y-=10;
    }
  if((mouseX>(this.x-40)&&mouseX<(this.x)) && mouseY<(this.y)&&mouseY>(this.y-40))
  {
    this.x+=20;
      this.y+=10;
  }
  if((mouseX>(this.x)&&mouseX<(this.x+40)) && mouseY<(this.y)&&mouseY>(this.y-40))
    {
        this.x-=20;
       this.y+=10;
    }
  
  this.y++;
      
   if(this.y>height)
    {end();}
  if(this.x>width)
    {this.x=0;}
  if(this.x<0)
    {this.x=window.innerWidth;}
      
   }
   
     display()
   {
  
  imageMode(CENTER);
  image(img, this.x, this.y, 50, 50);
      fall();
   }
   
  
}

class sakura
{  
   constructor()
   {
   this.petals=[];
   for( var i=1; i<=20; i++)
   {
      petals[i]= new petal(Math.floor((Math.random() * width) + 100), Math.floor((Math.random() * 50) +3 ));
   }
   }
   
   display()
   {
      background(143,201,163);
      text("i am here");
      for( var i=1; i<=20; i++)
      {
         this.petals[i].display();
      }
   }
   
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
 j=j+1;}

var game= new sakura();

function setup() {
   
  height=800;
  width=1400;
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
  game.display();
}
 
}
