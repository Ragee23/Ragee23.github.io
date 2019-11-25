const backGround = document.querySelector('.bg');

function random(){
    let randomNumber1 = Math.floor(Math.random()*255);
    let randomNumber2 = Math.floor(Math.random()*255);
    let randomNumber3 = Math.floor(Math.random()*255);
    let finalColor = 'rgb(' + randomNumber1 +', ' + randomNumber2 + ', ' + randomNumber3 + ')';
    console.log(finalColor);
    backGround.style.backgroundColor = finalColor;
};

backGround.addEventListener('click', random);