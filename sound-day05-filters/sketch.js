let noise = new Tone.Noise("pink"); // pink, brown, or white
let filter = new Tone.Filter (100, "lowpass"); // highpass, lowpass, bandpass. First argument is the frequency cutoff.

noise.connect(filter);
filter.toDestination();

// rampTo can be added to objects that have a .value like frequency or volume. 
// First argument is target frequency, second is how long it'll take to get there in seconds
function keyPressed (){
  if (key === 'q') {noise.start();
  filter.frequency.rampTo(10000, 10) 
  } else if (key === 'w') { noise.stop();
    filter.frequency.value = 100; // this is the frequency the filter resets to
  }
}

function setup() {
  createCanvas(400, 400); 
 
  // slider option, like before
  filterSlider = createSlider (100, 10000, 100, 0.1);
  filterSlider.position (100, 200);
  filterSlider.mouseMoved (() => { 
    filter.frequency.value = filterSlider.value();
  })
}

function draw() {
  background(150, 220, 210);
  text('Press Q to start and W to stop', 100, 100);
  text('Use slider for filter', 100, 175);
}
  