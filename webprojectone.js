//Nmae desinge
let Nmaedesigne = document.getElementById(`name`);

Nmaedesigne.addEventListener('mouseenter',function(){
    Nmaedesigne.style.color = `yellow`;
    Nmaedesigne.style.padding = `40px`;
    Nmaedesigne.style.fontSize = `50px`;
});
Nmaedesigne.addEventListener('mouseleave',function(){
   setTimeout(() => {
    Nmaedesigne.style.color = `aqua`;
    Nmaedesigne.style.padding = `0px`;
    Nmaedesigne.style.fontSize = `46px`;
   }, 
   1000);
});
