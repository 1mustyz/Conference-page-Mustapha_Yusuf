const menu = document.querySelector('.menu');
const modalInner = document.querySelector('.modal-inner');






menu.addEventListener('click', ()=>{
    console.log(modalInner);

    modalInner.classList.toggle('hidden');

});