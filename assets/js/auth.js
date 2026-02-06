/* =====================================
   ULTRA FINTECH AUTH ENGINE (CLEAN FIX)
===================================== */

function getAuth(){
 return document.getElementById("authPopup");
}

/* ==========================
   OPEN LOGIN / SIGNUP
========================== */

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

 if(!email || !pass){
   showToast("Isi data dulu");
   return;
 }

 localStorage.setItem("fintechUser",email);

 updateUserUI(email);
 renderNavbarUser(email);

 showToast("Login berhasil 😈");
 closeAuth();
}

/* GOOGLE LOGIN SIMULASI */
function loginGoogle(){

 showToast("Menghubungkan Google...");

 setTimeout(()=>{
   const email="google_user@gmail.com";

   localStorage.setItem("fintechUser",email);

   updateUserUI(email);
   renderNavbarUser(email);

   showToast("Login Google berhasil 🚀");
   closeAuth();
 },900);
}

/* ===============================
   ULTRA NAVBAR FINTECH ENGINE
================================ */

function renderNavbarUser(email){

 const navUser = document.getElementById("navUser");
 if(!navUser) return;

 if(!email){
   navUser.innerHTML=`<a onclick="openLogin()">Login</a>`;
   return;
 }

 const name=email.split("@")[0];

 navUser.innerHTML=`
   <div class="nav-avatar">
     <span class="avatar-circle">${name[0].toUpperCase()}</span>
     <span class="avatar-name">${name}</span>
   </div>
 `;
}

window.renderNavbarUser=renderNavbarUser;

/* UPDATE USER UI */
function updateUserUI(email){

 if(!email) return;

 const nav=document.querySelector("#navMenu");
 if(!nav) return;

 let user=document.getElementById("navUser");

 if(!user){
   user=document.createElement("li");
   user.id="navUser";
   nav.appendChild(user);
 }
}

/* LOGOUT */
function logoutUser(){

 localStorage.removeItem("fintechUser");

 const user=document.getElementById("navUser");
 if(user) user.innerHTML=`<a onclick="openLogin()">Login</a></a>`;

 showToast("Logout berhasil");
}

/* ===============================
   INIT ENGINE (SATU SAJA)
================================ */

document.addEventListener("DOMContentLoaded",()=>{

 const savedUser=localStorage.getItem("fintechUser");

 if(savedUser){
   updateUserUI(savedUser);
   renderNavbarUser(savedUser);
 }

});

/* =====================================
   ULTRA FINTECH NAVBAR ENGINE
===================================== */
const loginBtn=document.getElementById("navLoginBtn");
function fintechNavbarUpdate(email){

 const avatar=document.getElementById("navAvatar");
 const navUser=document.getElementById("navUser");

 if(!avatar || !navUser) return;

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
   navUser.style.display="block";
   navUser.innerHTML=`<a onclick="openLogin()">Login</a>`;

 }

}

/* hook ke auth engine lama */
const oldUpdateUserUI = window.updateUserUI;

window.updateUserUI=function(email){
 if(oldUpdateUserUI) oldUpdateUserUI(email);
 fintechNavbarUpdate(email);
};

/* init saat reload */
document.addEventListener("DOMContentLoaded",()=>{
 const email=localStorage.getItem("userEmail");
 fintechNavbarUpdate(email);
});

/* expose global */
window.openLogin=openLogin;
window.openSignup=openSignup;
window.loginManual=loginManual;
window.loginGoogle=loginGoogle;
window.closeAuth=closeAuth;
window.logoutUser=logoutUser;
