console.log('it works');
const menuImg = document.querySelector('.menu-img');
const menu = document.querySelector('.sub-nav-right');
//console.log(menuImg);

menuImg.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    //console.log('hello');

});