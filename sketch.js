var bg,system,code,security;
var score=0;
var playState = 'start'
var db 
var students = 0
function preload() {
  bg = loadImage("wallpaper.jpg");
}

function setup() {
  createCanvas(1000,1000);
  db = firebase.database()
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  if(playState=="start"){
  questions();
  security.display();  
}

else if(playState=='over'){
    fill("white")
    textSize(40);
    text("DONE",250, 200);
  text("SCORE: "  + score, 200,100)
}
}