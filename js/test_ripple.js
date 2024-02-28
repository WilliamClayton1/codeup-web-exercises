const cover = document.querySelector('.cover');
const hello = document.querySelector('.hello');

cover.addEventListener("click", e => {

    let ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = e.offsetX +  'px';
    ripple.style.top = e.offsetY + 'px';
    cover.appendChild(ripple);


})

hello.addEventListener("click", e => {

    let ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = e.offsetX +  'px';
    ripple.style.top = e.offsetY + 'px';
    hello.appendChild(ripple);


})

