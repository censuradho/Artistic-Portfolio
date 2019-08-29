const $btnOpen = document.getElementById('btnMenu_open');
const $btnClose = document.getElementById('btnMenu_close');
const $navegation = document.getElementById('navegation');
const $html = document.getElementById('body');
const form = document.querySelector('.form')

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
        windowTop > e.offsetTop 
        ? e.classList.add('animate')
        : e.classList.remove('animate')
    })
}
animate();
window.addEventListener('scroll',function(){
    animate();
})



//scroll suave link navbar
const ulrCurrent = window.location.url
const menuItens = document.querySelectorAll('header a[href^="#"')

    menuItens.forEach(itens=> {
        itens.addEventListener('click', scrollToIdOnClick)
    })

    function scrollToIdOnClick(event) {
        event.preventDefault();
        const to = getElementByHref(event.target)
        scrollToPosition(to)

        function scrollToPosition() {
            window.scroll({
                top: to,
                behavior: 'smooth'
            }) 
        }
        
        function getElementByHref(target) {
            const id = target.getAttribute('href');
            return document.querySelector(id).offsetTop;
        }
    }


form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Just a demo')
})






