const synth1 = new Tone.PolySynth(Tone.Synth);
const synth2 = new Tone.PolySynth(Tone.DuoSynth);

const bend = new Tone.PitchShift();
bend.pitch = 0;

synth1.connect(bend);
bend.toDestination();

synth2.connect(bend);
bend.toDestination();

//can add sharps and flats in your note name string
let notes = { 
  'a': 'C4',
  's': 'D4',
  'd': 'Eb4',
  'f': 'f4',
  'g': 'g4',
  'h': 'Ab4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(400, 400);

  //creating dropdown
  mySelect = createSelect();
  mySelect.position(100, 100);
  mySelect.option('Simple Synth');
  mySelect.option('Duo Synth');
  mySelect.selected('Simple Synth');

  
  pitchSlider = createSlider (-12, 12, 0, 0.01);
  pitchSlider.position (120,200);
  pitchSlider.mouseMoved(() => bend.pitch = pitchSlider.value());

}

function draw() {
  background(210, 250, 150);
  text("Play A through K and bend pitch with slider.", 75, 150)

}

function keyPressed() {
  if (mySelect.selected() === 'Simple Synth') {
    let playNotes = notes[key];
    synth1.triggerAttackRelease(playNotes, 0.8);
  } else if (mySelect.selected() === 'Duo Synth') {
    let playNotes = notes[key];
    synth2.triggerAttackRelease(playNotes, 0.8);
  }
}

