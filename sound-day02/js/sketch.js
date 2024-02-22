
// here we declare our sound sources using the "players" tone object
// the preload function has been removed so we can have our signal path down below

let sounds = new Tone.Players({
 'popcorn': "assets/popcorn.mp3",
 'water': "assets/water.mp3"
  });

// here we delcare our effects objects: FeedbackDelay and Distortion
let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
let distAmt = new Tone.Distortion (0.5); 

// button and slider variables
let button1, button2;
let delaySlider, fbSlider, distSlider;

// here is our signal path: sound source --> delay --> distortion --> audio out
sounds.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();


function setup() {
  createCanvas(400, 400);
 
  // here are our buttons
  button1 = createButton('Popcorn Maker');
  button1.position(85, 150);
  button1.mousePressed(() => sounds.player("popcorn").start()); 
  
  button2 = createButton('Water Trickle');
  button2.position(205, 150);
  button2.mousePressed(() => sounds.player("water").start());

  
  // here are our sliders
  // you only need 1 slider for the assignment, but here are 3

  // the layout is: object variable.property so, delAmt.delayTime
  // adding .value to the end of this is for signals and time parameters, for numbers it is not necessary

  delaySlider = createSlider (0, 1, 0, 0.05);
  delaySlider.position (120, 200);
  delaySlider.mouseMoved (() => delAmt.delayTime.value = delaySlider.value()); 

  fbSlider = createSlider (0, 0.9, 0, 0.05);
  fbSlider.position (120, 250);
  fbSlider.mouseMoved (() => delAmt.feedback.value = fbSlider.value ());

  distSlider = createSlider (0, 0.9, 0, 0.05);
  distSlider.position (120, 300);
  distSlider.mouseMoved (() => distAmt.distortion = distSlider.value());
}


function draw() {
  background(50, 200, 200);
  text ("Press buttons for sound", width/3, 120);
  text ("Add delay", width/3, 235);
  text ("Add feedback", width/3, 285);
  text ("Add distortion", width/3, 335);
}

