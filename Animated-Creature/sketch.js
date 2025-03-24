// Global variables for animation
let monsterX = 200;
let monsterY = 250;
let monsterSpeedX = 3;

function setup() {
  createCanvas(400, 400); 
  noStroke();
}

function draw() {
  background(220); 
  
  // Step 1: the background
  drawBackground();
  
  // Step 2
  fill(100, 200, 100); 
  rect(0, height - 50, width, 50);
  
  // Step 3: the monster
  drawMonster(monsterX, monsterY);
  
  // Animation: monster move horizontally
  monsterX += monsterSpeedX;
  if (monsterX > width - 50 || monsterX < 50) {
    monsterSpeedX = -monsterSpeedX;
  }
}

function drawBackground() {
  // Sky gradient
  for (let i = 0; i <= height / 2; i++) {
    let inter = map(i, 0, height / 2, 0, 1);
    let c = lerpColor(color(135, 206, 250), color(70, 130, 180), inter);
    stroke(c);
    line(0, i, width, i);
  }
  
  // Sun
  fill(255, 223, 0);
  noStroke();
  ellipse(width - 80, 80, 100, 100);
  
  // Mountains
  fill(100, 100, 100);
  triangle(0, height - 50, 150, 100, 300, height - 50);
  fill(150, 150, 150);
  triangle(50, height - 50, 200, 50, 350, height - 50);
  
  // Clouds
  fill(255, 255, 255, 200);
  ellipse(100, 100, 120, 60);
  ellipse(300, 120, 120, 60);
  ellipse(220, 60, 100, 50);
}

function drawMonster(x, y) {
  // Body (big round shape)
  fill(50, 200, 50); // Green
  ellipse(x, y, 100, 100);
  
  // Single Eye
  fill(255);
  ellipse(x, y - 10, 40, 40); // White eye
  fill(0);
  ellipse(x, y - 10, 20, 20); // Pupil
  
  // Horns
  fill(200, 150, 100); 
  triangle(x - 30, y - 40, x - 10, y - 60, x, y - 40);
  triangle(x + 30, y - 40, x + 10, y - 60, x, y - 40);
  
  // Mouth
  fill(0);
  arc(x, y + 20, 50, 30, 0, PI);
  
  // Teeth
  fill(255);
  triangle(x - 10, y + 20, x - 5, y + 10, x, y + 20);
  triangle(x + 10, y + 20, x + 5, y + 10, x, y + 20);
  
  // Arms
  fill(50, 200, 50);
  ellipse(x - 55, y + 10, 20, 50); // Left arm
  ellipse(x + 55, y + 10, 20, 50); // Right arm
  
  // Legs
  rect(x - 25, y + 50, 15, 40, 5);
  rect(x + 10, y + 50, 15, 40, 5);
}

// HTML description
document.body.innerHTML = `
  <h1>Mckenley's Monster</h1>
  <p>This friendly, one-eyed monster loves to bounce around. Its green body shines under the bright sun as it explores the grassy fields!</p>
`;
