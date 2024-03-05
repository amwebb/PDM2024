function preload(){
  mouse = loadImage ('assets/mouse.jpeg')
}

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  if (mouseIsPressed ===true){
    background(mouse);
  } else if (mouseIsPressed === false){
    background (240);
    text ('press mouse', 150, height/3);
  }
}

   
//Your assignment needs to use objects from Tone.js not preexisitng sound files!
let soundFX = new Tone.Players({
    squeaks: "assets/squeaky.mp3", 
}).toDestination(); 

function mousePressed() { 
    soundFX.player("squeaks").start(); 
}

function mouseReleased() { 
  soundFX.player("squeaks").stop(); 
} 


  