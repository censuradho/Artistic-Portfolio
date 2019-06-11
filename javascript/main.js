const $btnOpen = document.getElementById('btnMenu_open');
const $btnClose = document.getElementById('btnMenu_close');
const $navegation = document.getElementById('navegation');
const $html = document.getElementById('body');
function openMenu() {
    navegation.className = 'navegationMob navegation_open '
}
function closeMenu() {
    navegation.className = 'navegationMob'
}

$btnOpen.addEventListener('click', openMenu);
$btnClose.addEventListener('click', closeMenu);


const elementos = document.querySelectorAll('[data-anime]');
function animate() {
    const windowTop = window.pageYOffset + 400;
    elementos.forEach(function(e){
        if(windowTop > e.offsetTop) {
            e.classList.add('animate')
        }else {
            e.classList.remove('animate')
        }
    })
}
animate();
window.addEventListener('scroll',function(){
    animate();
})
