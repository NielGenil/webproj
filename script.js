let pic3 = document.getElementById('pic3');
let pic2 = document.getElementById('pic2');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    pic2.style.right = value * -1.5 + 'px';
    pic3.style.left = value * -1.5 + 'px';
    
});