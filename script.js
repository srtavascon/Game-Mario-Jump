//querysele... serve para pegar img
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

//add class jump, depois remove
const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump'); 
    },500);
}

//vou fazer aqui um loop para verificar a todo momento
//se perdeu ou não

//semelhante a settimeout, (função,tempo)
const loop = setInterval(() => {
    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    //console.log(marioPosition)
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        //serve para ele parar exatamente no momento que for 120
        pipe.style.left = `${pipePosition}px`;
        //vou parar o mario no momento que encostar no cano
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        //muda a imagem do mario para gameover
        mario.src = './Images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        //para parar o loop depois de bater
        clearInterval(loop);
    }

    //console.log(pipePosition)
} ,10);

//keysown é pressionar tecla
document.addEventListener('keydown', jump);