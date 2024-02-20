
let soundFX, button1, button2; //declare your variables here

//Tone.Players is a tonejs object, you can find it in the documentation for other parameters
function preload (){
  soundFX = new Tone.Players ({
    popcorn : "assets/popcorn.mp3", //this can also be a URL to a sound instead of a file path
    water : "assets/water.mp3"
  }).toDestination(); //tells your audio to go to your speakers
}

function setup() {
  createCanvas(400, 400);

  //inline functions for the buttons
  button1 = createButton('Popcorn Maker');
  button1.position (85, 150);
  button1.mousePressed (() =>soundFX.player ('popcorn').start());

  button2 = createButton('Water Fall');
  button2.position (205, 150);
  button2.mousePressed (() => soundFX.player ('water').start());

}

//regular functions instead of inline
//if you want to use these, you'd replace your entire inline with the name of the corresponding function

// function play1 (){
//   soundFX.player ('popcorn').start()
// }

// function play2 (){
//   soundFX.player ('water').start()
// }

function draw() {
  background(220, 100, 200);
}
