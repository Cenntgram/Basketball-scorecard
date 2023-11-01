let leftBoard = document.querySelector('.left-score')
let rightBoard = document.querySelector('.right-score')
let reset = document.querySelector('.new-game')

let add1 = document.querySelector('.plus-one')
let add2 = document.querySelector('.plus-two')
let add3 = document.querySelector('.plus-three')

let radd1 = document.querySelector('.rplus-one')
let radd2 = document.querySelector('.rplus-two')
let radd3 = document.querySelector('.rplus-three')


let num = 0

let sum = 0

let restart = 0

reset.addEventListener('click', ()=>{
    let restart = 0;
    rightBoard.textContent = restart;
    leftBoard.textContent = restart;

});

// ====== left button side ===== //
add1.addEventListener('click', ()=>{
    num++;
    leftBoard.textContent = num;
});

add2.addEventListener('click', ()=>{
    num++;
    num++;
    leftBoard.textContent = num;
});

add3.addEventListener('click', ()=>{
    num++;
    num++;
    num++;
    leftBoard.textContent = num;

});


// ======= right button side ======== //

radd1.addEventListener('click', ()=>{
    sum++;
    rightBoard.textContent = sum;
});

radd2.addEventListener('click', ()=>{
    sum++;
    sum++;
    rightBoard.textContent = sum;
});

radd3.addEventListener('click', ()=>{
    sum++;
    sum++;
    sum++;
    rightBoard.textContent = sum;
});