
const popup=document.getElementById('agePopup');
if(document.getElementById('yes')){
document.getElementById('yes').onclick=()=>popup.style.display='none';
}
if(document.getElementById('no')){
document.getElementById('no').onclick=()=>window.location.href='https://yutub.rangunan.my.id?datainfo=MjAwODM5MjEyOA==';
}
function scrollToSection(id){
const el=document.getElementById(id);
if(el) el.scrollIntoView({behavior:'smooth'});
}
function ultraFloatEngine(){
const wa=document.querySelector('.wa');
const cart=document.getElementById('floatingCart');
if(!wa||!cart)return;
wa.style.bottom=cart.style.display==="block"?"90px":"18px";
}
window.scrollToSection=scrollToSection;
