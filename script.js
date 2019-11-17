const currentBlkMan = document.querySelector('#slider-1'); 
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
let blkMen = ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg', 'slider-4.jpg'];
previousBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);

let num = 0; 

function previous(){
    if (num == 0){
        num = blkMen.length;
    };
        --num;
        currentBlkMan.src = blkMen[num];
        console.log(currentBlkMan); 
    };
   
function next(){
    if (num == blkMen.length){
        num = 0;
    };
        currentBlkMan.src = blkMen[num];
        num++;
        console.log(currentBlkMan);      
};