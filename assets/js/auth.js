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

/* =====================================
   FINTECH AUTH PRO EXPERIENCE 😈
===================================== */

function createUserDropdown(name){

 let box=document.getElementById("userDropdown");

 if(!box){

  box=document.createElement("div");
  box.id="userDropdown";

  box.style.position="absolute";
  box.style.top="60px";
  box.style.right="20px";
  box.style.background="#111";
  box.style.border="1px solid rgba(212,175,55,.4)";
  box.style.borderRadius="16px";
  box.style.padding="10px";
  box.style.display="none";
  box.style.zIndex="9999";

  box.innerHTML=`
    <div style="padding:8px 12px;cursor:pointer" onclick="logoutUser()">🚪 Logout</div>
  `;

  document.body.appendChild(box);
 }

 return box;
}

function attachAvatarEvent(){

 const avatar=document.getElementById("navUser");

 if(!avatar) return;

 const dropdown=createUserDropdown();

 avatar.onclick=function(){

   dropdown.style.display=
     dropdown.style.display==="block"?"none":"block";
 }
}

/* UPDATE NAVBAR PRO */
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

 attachAvatarEvent();
}

/* LOGOUT ENGINE */
function logoutUser(){

 localStorage.removeItem("fintechUser");

 const user=document.getElementById("navUser");
 if(user) user.remove();

 const dropdown=document.getElementById("userDropdown");
 if(dropdown) dropdown.remove();

 showToast("Logout berhasil");
}

/* SLIDE ANIMATION POPUP */
document.addEventListener("DOMContentLoaded",()=>{

 const popup=document.getElementById("authPopup");
 if(!popup) return;

 popup.style.transition="all .35s ease";
 popup.style.transform="translateY(40px)";
 popup.style.opacity="0";

 const observer=new MutationObserver(()=>{
   if(popup.classList.contains("show")){
     popup.style.transform="translateY(0)";
     popup.style.opacity="1";
   }
 });

 observer.observe(popup,{attributes:true});
});


/* expose global agar onclick HTML bisa akses */
window.openLogin = openLogin;
window.openSignup = openSignup;
window.loginManual = loginManual;
window.loginGoogle = loginGoogle;
window.closeAuth = closeAuth;


