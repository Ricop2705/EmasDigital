/* =====================================
   ULTRA FINTECH AUTH ENGINE
===================================== */

const authPopup = document.getElementById("authPopup");

function openLogin(){
 authPopup.classList.add("show");
 document.getElementById("authTitle").innerText="Login";
}

function openSignup(){
 authPopup.classList.add("show");
 document.getElementById("authTitle").innerText="Sign Up";
}

function closeAuth(){
 authPopup.classList.remove("show");
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

/* expose global */
window.openLogin=openLogin;
window.openSignup=openSignup;
window.loginManual=loginManual;
window.loginGoogle=loginGoogle;
