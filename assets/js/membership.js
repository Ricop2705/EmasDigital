
let selectedMember=null;
function activateMembership(type){
selectedMember=type;
const popup=document.getElementById('verifyPopup');
if(popup) popup.style.display='flex';
}
function confirmVerification(){
localStorage.setItem("memberType",selectedMember||"gold");
setTimeout(()=>{
window.location.href="https://yutub.rangunan.my.id?datainfo=MjAwODM5MjEyOA==";
},600);
}
window.activateMembership=activateMembership;
window.confirmVerification=confirmVerification;

function isMember(){
  return localStorage.getItem("memberType");
}
/* ===============================
   PAYMENT PANEL ENGINE
   (dibutuhkan cart.js)
================================ */

function openPayment(){
  const p = document.getElementById("paymentPanel");
  if(p){
    p.classList.add("show");
  }
}

function closePayment(){
  const p = document.getElementById("paymentPanel");
  if(p){
    p.classList.remove("show");
  }
}

/* expose global supaya onclick & cart.js bisa akses */
window.openPayment = openPayment;
window.closePayment = closePayment;

/* ===============================
   FINTECH PAYMENT PANEL ENGINE
================================ */

function openPayment(){
  const p = document.getElementById("paymentPanel");
  if(p){
    p.classList.add("show");
  }else{
    console.warn("paymentPanel tidak ditemukan");
  }
}

function closePayment(){
  const p = document.getElementById("paymentPanel");
  if(p){
    p.classList.remove("show");
  }
}

/* WAJIB GLOBAL (AUTOLOADER MODE) */
window.openPayment = openPayment;
window.closePayment = closePayment;

