const cover = document.querySelector('.cover');

cover.addEventListener("click", e => {

    let ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = e.offsetX +  'px';
    ripple.style.top = e.offsetY + 'px';
    cover.appendChild(ripple);


})


