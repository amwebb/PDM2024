// amplitude modulation:
let amSynth = new Tone.AMSynth().toDestination();
amSynth.type = 'sine'
amSynth.frequency.value = 0; // try changing this number
amSynth.harmonicity.value = .9; // and the harmonicity value, too

// frequency modulation:
let fmSynth = new Tone.FMSynth().toDestination();
fmSynth.type = 'sine'
fmSynth.frequency.value = 0;
fmSynth.harmonicity.value = 0.1; // harmonicity and modulation index are both interesting numbers to change
fmSynth.modulationIndex = 0.9;


let notes = {
  'a' : 'C4',
  's' : 'D4',
  'd' : 'E4',
  'f' : 'F4',
  'g' : 'G4',
  'h' : 'A4',
  'j' : 'B4',
  'k' : 'C5'
}

function setup() {
  createCanvas(400, 400);

mySelect = createSelect();
mySelect.position (100,100);
mySelect.option('Amplitude Modulation');
mySelect.option('Frequency Modulation');
mySelect.selected ('Amplitude Modulation');

}

function keyPressed(){
  if (mySelect.selected() === "Amplitude Modulation"){
    let playNotes = notes[key];
    amSynth.triggerAttackRelease(playNotes, 0.8); // playNotes variable can be replaced by a frequency number or pitch like "C4"
  } else if (mySelect.selected() === "Frequency Modulation"){
    let playNotes = notes[key];
    fmSynth.triggerAttackRelease(playNotes, 0.8);
  }
}

function draw() {
  background(100, 220, 150);
  text ('play A-K for synth', 140, 180)
}
