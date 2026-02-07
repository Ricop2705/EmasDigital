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

if(typeof isMember === "function" && isMember()){
  document.body.classList.add("vip-user");
}


document.querySelectorAll("#navMenu li").forEach(li=>{
 li.addEventListener("click",()=>{
   if(navMenu){
 navMenu.classList.remove("active");
}

 });
});

/* ===============================
   MINI CART SLIDE PANEL
================================ */

function openCartPanel(){
  const panel=document.getElementById("cartPanel");
  if(panel) panel.classList.add("show");
}

function closeCartPanel(){
  const panel=document.getElementById("cartPanel");
  if(panel) panel.classList.remove("show");
}

window.openCartPanel=openCartPanel;
window.closeCartPanel=closeCartPanel;

/* NAVBAR SHAKE ON CHECKOUT */
document.addEventListener("click",e=>{
 if(e.target && e.target.innerText==="Checkout Sekarang"){
   document.body.classList.add("checkout-active");
   setTimeout(()=>document.body.classList.remove("checkout-active"),500);
 }
});

function setLoading(btn,state,text="Memproses..."){
 if(!btn) return;

 if(state){
   btn.dataset.original = btn.innerText;
   btn.innerText = text;
   btn.disabled = true;
 }else{
   btn.innerText = btn.dataset.original || "OK";
   btn.disabled = false;
 }
}

window.setLoading=setLoading;

function showToast(msg){
 const box=document.getElementById("toastBox");
 if(!box) return;

 const div=document.createElement("div");
 div.className="toast";
 div.innerText=msg;

 box.appendChild(div);

 setTimeout(()=>div.remove(),2500);
}

window.showToast=showToast;

const navMenu = document.getElementById("navMenu");

document.querySelectorAll("#navMenu li").forEach(li=>{
 li.addEventListener("click",()=>{
   if(navMenu){
     navMenu.classList.remove("active");
   }
 });
});


/* ===============================
 ULTRA FINTECH MOTION ENGINE
================================ */

// Slide payment panel
function openPayment(){
 const panel=document.getElementById("paymentPanel");
 if(panel){
   panel.classList.add("show");
 }
}

function closePayment(){
 const panel=document.getElementById("paymentPanel");
 if(panel){
   panel.classList.remove("show");
 }
}

// Scroll reveal animation
function ultraReveal(){
 document.querySelectorAll(".card,.trust-box,.member-card").forEach(el=>{
   el.classList.add("motion-slide-up");
 });

 const obs=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){
       entry.target.classList.add("motion-show");
     }
   });
 });

 document.querySelectorAll(".motion-slide-up").forEach(el=>obs.observe(el));
}

// Floating cart pulse
function ultraCartPulse(){
 const cart=document.getElementById("floatingCart");
 if(!cart) return;
 cart.style.transform="scale(1.15)";
 setTimeout(()=>cart.style.transform="scale(1)",180);
}

window.openPayment=openPayment;
window.closePayment=closePayment;
window.ultraCartPulse=ultraCartPulse;

document.addEventListener("DOMContentLoaded",ultraReveal);

(function(){
 if(window.__ULTRA_CORE__) return;
 window.__ULTRA_CORE__=true;
 console.log("ULTRA CORE READY");
})();

/* ===============================
   NAVIGATION ENGINE FIX
================================ */

function showHome(){
  const home=document.getElementById("home");
  const login=document.getElementById("loginPage");

  if(home) home.style.display="block";
  if(login) login.style.display="none";
}

function showLogin(){
  const home=document.getElementById("home");
  const login=document.getElementById("loginPage");

  if(home) home.style.display="none";
  if(login) login.style.display="block";
}

/* expose global supaya onclick HTML bisa akses */
window.showHome = showHome;
window.showLogin = showLogin;

window.showToast = function(msg){

 const t=document.createElement("div");

 t.className="fintech-toast";
 t.innerText=msg;

 document.body.appendChild(t);

 setTimeout(()=>t.classList.add("show"),20);
 setTimeout(()=>t.remove(),2200);
};
