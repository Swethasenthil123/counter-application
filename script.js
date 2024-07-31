const maintitle = document.querySelector('#title'); 
let curValue = 0;

const btndecrement = document.querySelector('#decrement');
const btnreset = document.querySelector('#reset'); 
const btnincrement = document.querySelector('#increment'); 

btnincrement.addEventListener('click', () => {
    curValue += 1; 
    maintitle.textContent = curValue;
});

btndecrement.addEventListener('click', () => {
    curValue -= 1; 
    maintitle.textContent = curValue; 
});

btnreset.addEventListener('click', () => {
    curValue = 0;
    maintitle.textContent = curValue; 
});


