let p = document.getElementById("paragraph");
let b = document.getElementById("btn");
b.addEventListener('click', ()=>{
    p.style.display = 'none';
});
let b1 = document.getElementById("btn1");
b1.addEventListener('click', ()=>{
    p.style.display = '';
});
