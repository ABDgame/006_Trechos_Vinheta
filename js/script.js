
const bg = document.getElementsByClassName('bg')[0];
const blocks = document.getElementsByClassName('block');

for(var i = 1; i < 400; i++){
    bg.innerHTML += "<div class='block'></div>";
    const duration = Math.random() * 5;
    blocks[i].style.animationDuration = 2+duration+'s';
    blocks[i].style.animationDelay = duration+'s';
}

const container = document.querySelector('.container');
setTimeout(function(){
    container.classList.add('active');
}, 14000);
