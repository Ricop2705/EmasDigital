/* =====================================
   ULTRA FINTECH AUTH ENGINE
===================================== */
function getAuth(){
 return document.getElementById("authPopup");
}


function openLogin(){

 const authPopup = getAuth();
 if(!authPopup) return;

 authPopup.classList.add("show");

 const title=document.getElementById("authTitle");
 if(title) title.innerText="Login";
}

function openSignup(){

 const authPopup = getAuth();
 if(!authPopup) return;

 authPopup.classList.add("show");

 const title=document.getElementById("authTitle");
 if(title) title.innerText="Sign Up";
}


/* ==========================
   MANUAL LOGIN / SIGNUP
========================== */

function loginManual(){

 const email=document.getElementById("authEmail").value;
 const pass=document.getElementById("authPass").value;

 if(!email || !pass){
   showToast("Isi data dulu");
   return;
 }

 localStorage.setItem("userEmail",email);

 showToast("Login berhasil 😈");
 closeAuth();

}

function closeAuth(){
 const authPopup=getAuth();
 if(!authPopup) return;
 authPopup.classList.remove("show");
}

/* ==========================
   GOOGLE LOGIN SIMULASI
========================== */

function loginGoogle(){

 showToast("Menghubungkan Google...");

 setTimeout(()=>{
   localStorage.setItem("userEmail","google_user@gmail.com");
   showToast("Login Google berhasil 🚀");
   closeAuth();
 },900);
}

/* =====================================
   ULTRA FINTECH AUTH REAL MODE 😈
===================================== */

function setUser(email){

 localStorage.setItem("fintechUser",email);

 updateUserUI(email);
}

function getUser(){
 return localStorage.getItem("fintechUser");
}

/* UPDATE NAVBAR */
function updateUserUI(email){

 const nav=document.querySelector("#navMenu");
 if(!nav) return;

 let user=document.getElementById("navUser");

 if(!user){

   user=document.createElement("li");
   user.id="navUser";
   user.style.cursor="pointer";
   nav.appendChild(user);
 }

 user.innerHTML=`
   <span style="
     background:#d4af37;
     padding:6px 14px;
     border-radius:20px;
     color:#000;
     font-weight:bold;
   ">
   👤 ${email.split("@")[0]}
   </span>
 `;
}

/* LOGIN MANUAL UPGRADE */
const oldLoginManual=window.loginManual;

window.loginManual=function(){

 const email=document.getElementById("authEmail").value;
 const pass=document.getElementById("authPass").value;

 if(!email || !pass){
   showToast("Isi data dulu");
   return;
 }

 setUser(email);

 showToast("Login berhasil 🚀");
 closeAuth();
}

/* GOOGLE LOGIN UPGRADE */
window.loginGoogle=function(){

 showToast("Menghubungkan Google...");

 setTimeout(()=>{

   const fakeGoogle="user.google@gmail.com";

   setUser(fakeGoogle);

   showToast("Google Login berhasil 😈");

   closeAuth();

 },900);
}

/* AUTO RESTORE LOGIN */
document.addEventListener("DOMContentLoaded",()=>{
 const user=getUser();
 if(user) updateUserUI(user);
});

/* expose global agar onclick HTML bisa akses */
window.openLogin = openLogin;
window.openSignup = openSignup;
window.loginManual = loginManual;
window.loginGoogle = loginGoogle;
window.closeAuth = closeAuth;


