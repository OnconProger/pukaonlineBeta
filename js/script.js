let map = document.querySelector('.map');
let hero = document.querySelector('.myAnimation');
let button = document.querySelector('.button');
let buttonTwo = document.querySelector('.buttonTwo');
let buttonThree = document.querySelector('.buttonThree');
let pos = 0;

button.addEventListener('click', function frame(){
    let id = setInterval(frame, 100);
    if(pos == 640){
        clearInterval();
    }
    else{
        pos++;
        hero.style.bottom = pos + 'px';
    }
})
buttonTwo.addEventListener('click', function frame(){
    let id = setInterval(frame, 100);
    if(pos == 350){
        clearInterval();
    }
    else{
        pos++;
        hero.style.bottom = pos + 'px';
        hero.style.left = pos + 'px';
    }
})
buttonThree.addEventListener('click', function frame(){
    let id = setInterval(frame, 100);
    if(pos == 640){
        clearInterval();
    }
    else{
        pos++;
        hero.style.right = pos + 'px';
        hero.style.left = pos + 'px';
    }
})