// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Set the canvas size to cover the whole webpage
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the 2D rendering context
var ctx = canvas.getContext("2d");

// Function to generate random color
function getRandomColor() {
    var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
    'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    'silver', 'teal', 'white', 'yellow'];
  var i= Math.floor(Math.random()*colors.length);
  return colors[i];
}

// Function to handle click event anywhere on the webpage
function handleClick(event) {
  // Generate random radius between 5 and 25
  var radius = Math.random() * 20 + 5;

  // Generate random background color
  var fillColor = getRandomColor();

  // Get the click event coordinates
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Draw the circle
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = fillColor;
  ctx.fill();
}

// Add click event listener to the whole document
document.addEventListener("click", handleClick);