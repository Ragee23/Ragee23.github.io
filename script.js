// Select all the elements on the project
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 50;
let hue = 0;

// Setup Canvas for drawing
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(x, y);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// Write a draw function
function draw( {key} ) {
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    switch (key) {
        case 'ArrowUp': 
        y = y - MOVE_AMOUNT;
        break;
        case 'ArrowRight': 
        x = x + MOVE_AMOUNT;
        break;
        case 'ArrowDown': 
        y = y + MOVE_AMOUNT;
        break;
        case 'ArrowLeft': 
        x = x - MOVE_AMOUNT;
        break;
        default:
            break;
        };
        
    ctx.lineTo(x, y);
    ctx.stroke();
};

// Write the handler for the arrow keys
function handlekey(e) {
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({ key: e.key});
    }
};

// Shake Function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        console.log('Done the shake');
        canvas.classList.remove('shake');
    }, { once: true});
}

// Listen for Arrow Keys
window.addEventListener('keydown', handlekey);
shakebutton.addEventListener('click', clearCanvas);