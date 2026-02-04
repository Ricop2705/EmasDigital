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

/* expose global agar onclick HTML bisa akses */
window.openLogin = openLogin;
window.openSignup = openSignup;
window.loginManual = loginManual;
window.loginGoogle = loginGoogle;
window.closeAuth = closeAuth;


