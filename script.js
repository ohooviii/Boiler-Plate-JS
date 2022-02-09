function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('container');
  background(220);
  
  button = createButton('save this scene!');
  button.mousePressed(saveImage);
  button.position(0,0);
  
  // let inp = createInput('Type to generate landscape.');
  // inp.position(40,0);
  // inp.size(cnv.width-42);
  
  c1 = color(random(255), random(80), random(0,100));
  c2 = color(0, random(150,255), random(255));

  setGradient(0,0,width,height, c1, c2, Y_AXIS);
}

const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;

let img1;
function preload() {
  img1 = loadImage('img/waveline_1.png');
}









function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}





function keyTyped() {
  
  if (key === 'q') {
    fill(255);
    stroke(0);
    var r1 = [];
    
    r1.push(random(10,100));
    
    ellipse(random(0,width), random(0,height/2), r1, r1);  
  }
  
    if (key === 'w') {
      //color
    fill(255);
    stroke(0);
    var r2 = [];
    
    r2.push(random(10,400));
    
    ellipse(random(0,width), random(0,height/2), r2, r2);  
  }
  
  if (key === 'e') {
    push();
    fill(255, 255, 0, 90);
    stroke(0);
    star(random(0,width), random(0,height/2), 45,55, 40);
    pop();
  }
  
  if (key === 'r') {
    push();
    fill(255,255,0);
    stroke(0);
    star(random(0,width), random(0,height/2), 30,35, 40);
    pop();
  }
  
  if (key === 't') {
    push();
    fill(255,255,0);
    stroke(0);
    star(random(0,width), random(0,height/2), 5, 8, 5);
    pop();
  }
  
  
  
    if (key === 'y') {
    image(img1, 0, random(0,height/8), width, 50);
  }
  
  
  
    
      if (key === 'u'){
      fill(0);
      stroke(0);
      rect(random(width), random(0,300), random(120), height-random(0,300))
  }

  
  
  
  
  
      if (key === 'i'){
      fill(0);
      stroke(0);
      let w1 = random(-1000,width);
      let h1 = random(0,height);
      rect(w1,h1, 1000, 10);
      rect(w1, h1+20, 1000,10);
  }
  
  
        if (key === 'o'){
      fill(255);
      stroke(0);
      rect(random(width), random(0,300), random(120), height-random(0,300))
  }
  
  

  
        if (key === 'p'){
      fill(0);
      stroke(0);
      let w1 = random(width);
      let h1 = random(height/4,height/4*3);
      rect(w1+30, h1+30, 20,20);
      rect(w1+30, h1, 20,20);
      rect(w1+30, h1+60, 20,20);
      rect(w1+30, h1+90, 20,20);
  }
  
  
  
  
  
  
  if (key === 'a'){
    fill(0);
    stroke(0);
    rect(random(width),random(0, height/5*4), random(50, 100), random(300,height));
  }
  
    if (key === 's'){
    fill(255);
    stroke(0);
    rect(random(width),random(0, height/5*4), random(50, 100), random(100,height));
  }
  
    if (key === 'd'){
    fill(255);
    stroke(0);
    rect(random(width),random(height/3, height/5*4), random(100,300), random(100,height/3));
  }
  
    if (key === 'f'){
    fill(0);
    stroke(0);
    rect(random(width),random(height/3, height/5*4), random(200,500), random(100,height/3));
  }
  
    if (key === 'g'){
      fill(0);
      stroke(0);
      let w1 = random(width);
      let h1 = random(height/4,height/4*3);
      rect(w1,h1, 80, 10);
      rect(w1, h1+20, 80,10);
      rect(w1, h1+40, 80,10);
      rect(w1, h1+60, 80,10);
  }
  
      if (key === 'h'){
      fill(255);
      stroke(0);
      let w1 = random(-1000, width);
      let h1 = random(height/4,height/4*3);
      rect(w1,h1, 1000, 10);
      rect(w1, h1+20, 1000,10);
  }
  
      if (key === 'j'){
      fill(0);
      stroke(0);
      let w1 = random(width);
      let h1 = random(height/4,height/4*3);
      rect(w1,h1, 400, 40);
      rect(w1, h1+60, 400,40);
  }
  
      if (key === 'k'){
      fill(255);
      stroke(0);
      let w1 = random(width);
      let h1 = random(height/4,height/4*3);
      rect(w1,h1, 200, 40);
      rect(w1, h1+60, 200,40);
  }
  
      if (key === 'l'){
      fill(255);
      stroke(0);
      let w1 = random(width);
      let h1 = random(height/4,height/4*3);
      rect(w1+30, h1+30, 20,20);
      rect(w1+30, h1, 20,20);
      rect(w1+30, h1+60, 20,20);
      rect(w1+30, h1+90, 20,20);
  }

  
  
  
  
  
  if (key === 'z') {
    fill(255);
    stroke(0);
    rect(0, random(height/10*9,height), width, height);
  }
  
  if (key === 'x') {
    fill(255);
    stroke(0);
    rect(random(0,width/4), random(height/10*8,height), width, height, random(100,200),random(20),0,0);
  } 
  
    if (key === 'c') {
    fill(255);
    stroke(0);
    rect(random(width/4, width/2), random(height/10*7,height), width, height, random(100,200),random(20),0,0);
  }
  
    if (key === 'v') {
    fill(255);
    stroke(0);
    rect(random(width/2, width/4*3), random(height/10*6,height), width, height, random(100,200),random(20),0,0);
  }
  
    if (key === 'b') {
    image(img1, 0, random(height,height/10*7), width, 50);
  }
  
    if (key === 'n') {
    fill(255);
    stroke(0);
    rect(0, random(height/10*6,height), random(width/4,width/2), height, 0,random(100,200),0,0);
  }
  
    if (key === 'm') {
    fill(255);
    stroke(0);
    rect(0, random(height/10*7,height), random(width/2,width/4*3), height, 0,random(100,200),0,0);
  }
  
  
}



function saveImage(){
  save("myimage.png");
}