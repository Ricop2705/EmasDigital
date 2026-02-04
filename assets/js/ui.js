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

/* ===============================
   NAVBAR TOGGLE MENU
================================ */

function toggleMenu(){
  const navMenu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  if(!navMenu || !hamburger) return;

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
}

/* expose ke HTML onclick */
window.toggleMenu = toggleMenu;

function showToast(msg){
  const t=document.createElement("div");
  t.innerText=msg;
  t.style.cssText=`
    position:fixed;
    bottom:80px;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    color:#fff;
    padding:12px 20px;
    border-radius:30px;
    z-index:9999;
  `;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),1600);
}

if(isMember()){
 document.body.classList.add("vip-user");
}

document.querySelectorAll("#navMenu li").forEach(li=>{
 li.addEventListener("click",()=>{
   navMenu.classList.remove("active");
 });
});
