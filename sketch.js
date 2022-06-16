// Image to ASCII
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// https://youtu.be/55iwMYv8tGI

// ASCII video: https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx
// ASCII image canvas: https://editor.p5js.org/codingtrain/sketches/r4ApYWpH_
// ASCII image DOM: https://editor.p5js.org/codingtrain/sketches/ytK7J7d5j
// ASCII image source text: https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// ASCII image weather API: https://editor.p5js.org/codingtrain/sketches/DhdqcoWn4


const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let gloria;
let video;
let asciiDiv;

function preload() {
  gloria = loadImage("gloria20.jpg");
}

function setup() {
  createCanvas(800, 800); 
  video = createCapture(VIDEO);
  video.size(50, 50);
  asciiDiv = createDiv();
}

function draw() {
  background(0);
  
  let w = width / video.width;
  let h = height / video.height;
  video.loadPixels();
  for (let i = 0; i < video.width; i++) {
    for (let j = 0; j < video.height; j++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(r,g,b);
      //square(i * w, j * h, w);
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w, j * h);
      
      
    }
  }
  
  
}