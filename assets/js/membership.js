
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
   GLOBAL AUTH EXPORT (FIX)
================================ */

function openSignup(){
  const popup=document.getElementById("signupPopup");
  if(popup) popup.style.display="flex";
}

function closeSignup(){
  const popup=document.getElementById("signupPopup");
  if(popup) popup.style.display="none";
}

/* expose ke HTML */
window.openSignup = openSignup;
window.closeSignup = closeSignup;

/* ===============================
   REAL AUTH STATE ENGINE
================================ */

function isLoggedIn(){
  return localStorage.getItem("memberType") !== null;
}

function applyAuthUI(){

  const loginBtn = document.querySelector(".login-link");
  const memberBtn = document.querySelector(".member-link");

  if(isLoggedIn()){
    document.body.classList.add("user-logged");
    if(loginBtn) loginBtn.innerText="Dashboard";
    if(memberBtn) memberBtn.style.display="inline-block";
  }
}

window.addEventListener("load",applyAuthUI);
