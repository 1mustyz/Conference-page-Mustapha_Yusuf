console.log('it works');

const fullName = document.querySelector('[name="name"]');
const email = document.querySelector('[name="email"]');
const quantity = document.querySelector('[name="quantity"]');
const msg = document.querySelector('[name="text"]');
const button = document.querySelector('[type="submit"]');




button.addEventListener('click', (e)=>{
    e.preventDefault();

    if(fullName.value="" || email.value== "" || quantity.value=="" || msg.value==""){
        console.log('your details cannot be processed');
        return;
    }
    console.log(fullName.value, quantity.value, email.value, msg.value);
});
