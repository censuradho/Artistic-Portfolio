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