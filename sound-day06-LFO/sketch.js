
let osc = new Tone.Synth(100, 'sine').toDestination();
let lfo = new Tone.LFO(10, 100, 500).connect(osc.frequency).start();

// Low frequency oscillator modulates a regular oscillator
// The first number in the LFO is how often the LFO oscillates
// When the number is below audible rannge (>20), it makes a tremolo sound
// When it it above audible range, the frequencies combine
// The second two numbers in the LFO are the frequencies between which it oscillates

function keyPressed() { 
 osc.triggerAttack();
}

function keyReleased() { 
  osc.triggerRelease();
}

function setup() {
  createCanvas(400, 400); 
 
}

function draw() {
  background(150, 220, 210);
  text('Press any key for LFO', 100, 100);
}
  