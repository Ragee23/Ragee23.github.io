const btn = document.querySelector('#btn');
const msgIn = document.querySelector('#msgIn');
const msgOut = document.querySelector('#msgOut');

btn.addEventListener('click', myFunction);

function myFunction(){

    if(msgIn.value == ''){
        alert('Yo enter someting')
    } else{
        let msg = msgIn.value;
        msgOut.innerHTML = msg + ' x10';
        msgIn.value = '';
    };
};

