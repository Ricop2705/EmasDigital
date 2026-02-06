/* =====================================
   ULTRA FINTECH AUTH ENGINE (FINAL CLEAN)
   NO DOUBLE ENGINE
===================================== */

function getAuth(){
 return document.getElementById("authPopup");
}

/* ==========================
   OPEN LOGIN / SIGNUP
========================== */

function openLogin(){
 const authPopup=getAuth();
 if(!authPopup) return;
 authPopup.classList.add("show");

 const title=document.getElementById("authTitle");
 if(title) title.innerText="Login";
}

function openSignup(){
 const authPopup=getAuth();
 if(!authPopup) return;
 authPopup.classList.add("show");

 const title=document.getElementById("authTitle");
 if(title) title.innerText="Sign Up";
}

function closeAuth(){
 const authPopup=getAuth();
 if(!authPopup) return;
 authPopup.classList.remove("show");
}

/* ==========================
   LOGIN MANUAL
========================== */

function loginManual(){

 const email=document.getElementById("authEmail").value;
 const pass=document.getElementById("authPass").value;

 if(!email||!pass){
   showToast("Isi data dulu");
   return;
 }

 localStorage.setItem("fintechUser",email);

 fintechNavbarUpdate(email);

 showToast("Login berhasil 😈");
 closeAuth();
}

/* GOOGLE LOGIN SIMULASI */

function loginGoogle(){

 showToast("Menghubungkan Google...");

 setTimeout(()=>{
   const email="google_user@gmail.com";

   localStorage.setItem("fintechUser",email);

   fintechNavbarUpdate(email);

   showToast("Login Google berhasil 🚀");
   closeAuth();
 },900);
}

/* ===============================
🔥 AUTO NAVBAR FINTECH ENGINE
SINGLE ENGINE ONLY
================================ */

function fintechNavbarUpdate(email){

 const avatar=document.getElementById("navAvatar");
 const navUser=document.getElementById("navUser");
 const loginBtn=document.getElementById("navLoginBtn");

 if(!avatar||!navUser) return;

 if(email){

   if(loginBtn) loginBtn.style.display="none";

   avatar.style.display="block";
   navUser.style.display="block";

   const name=email.split("@")[0];

   let badge="";
   const member=localStorage.getItem("memberType");

   if(member){
     badge=`<span class="nav-badge">${member.toUpperCase()}</span>`;
     document.body.classList.add("vip-user");
   }

   navUser.innerHTML=`
     <span>${name}</span>${badge}
     <a onclick="logoutUser()" style="margin-left:10px;cursor:pointer">Logout</a>
   `;

 }else{

   if(loginBtn) loginBtn.style.display="block";

   avatar.style.display="none";
   navUser.style.display="none";
   navUser.innerHTML="";

   document.body.classList.remove("vip-user");

 }
}

/* ===============================
   LOGOUT
================================ */

function logoutUser(){
 localStorage.removeItem("fintechUser");
 fintechNavbarUpdate(null);
 showToast("Logout berhasil");
}

/* ===============================
   INIT ENGINE
================================ */

document.addEventListener("DOMContentLoaded",()=>{

 const savedUser=localStorage.getItem("fintechUser");

 if(savedUser){
   fintechNavbarUpdate(savedUser);
 }

});

/* expose global */
window.openLogin=openLogin;
window.openSignup=openSignup;
window.loginManual=loginManual;
window.loginGoogle=loginGoogle;
window.closeAuth=closeAuth;
window.logoutUser=logoutUser;
window.fintechNavbarUpdate=fintechNavbarUpdate;
