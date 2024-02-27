
let sounds = new Tone.Players({
 'popcorn': "assets/popcorn.mp3",
 'water': "assets/water.mp3"
  });

let delAmt = new Tone.FeedbackDelay ("8n", 0.5);
let distAmt = new Tone.Distortion (0.5); 

let soundNames = ['popcorn', 'water'];
let buttons = [];
let delaySlider, fbSlider, distSlider;

sounds.connect(delAmt);
delAmt.connect(distAmt);
distAmt.toDestination();


function setup() {
  createCanvas(400, 400);

  soundNames.forEach((names, index) => {
    buttons[index] = createButton (names);
    buttons[index].position (120, 100 + index*50);
    buttons[index].mousePressed (() => sounds.player(names).start())
  })
  
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
  // text ("Press buttons for sound", width/3, 120);
  // text ("Add delay", width/3, 235);
  // text ("Add feedback", width/3, 285);
  // text ("Add distortion", width/3, 335);
}

