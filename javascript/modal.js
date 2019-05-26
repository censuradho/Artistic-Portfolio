const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.closeModal')

function modalOff() {
    modal.className = '.closeModal'
}
modal.addEventListener('click', modalOff)