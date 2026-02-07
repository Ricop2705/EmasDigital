function getAuth(){
 return document.getElementById("authPopup");
}

function openLogin(){
 const p=getAuth();
 if(p) p.classList.add("show");
}

function openSignup(){
 const p=getAuth();
 if(p) p.classList.add("show");
}

function closeAuth(){
 const p=getAuth();
 if(p) p.classList.remove("show");
}

function loginManual(){

 const email=document.getElementById("authEmail").value;
 const pass=document.getElementById("authPass").value;

 if(!email||!pass){
   showToast("Isi data dulu");
   return;
 }

 localStorage.setItem("fintechUser",email);
 fintechNavbarUpdate(email,true);

 showToast("Login berhasil 😈");
 closeAuth();
}

function loginGoogle(){

 showToast("Menghubungkan Google...");

 setTimeout(()=>{
   const email="google_user@gmail.com";
   localStorage.setItem("fintechUser",email);
   fintechNavbarUpdate(email,true);
   showToast("Login Google berhasil 🚀");
   closeAuth();
 },900);
}

function fintechNavbarUpdate(email,animate=false){

 const avatar=document.getElementById("navAvatar");
 const navUser=document.getElementById("navUser");
 const loginBtn=document.getElementById("navLoginBtn");

 if(!avatar||!navUser) return;

 if(email){

   if(loginBtn) loginBtn.style.display="none";

   avatar.style.display="flex";
   navUser.style.display="block";

   const name=email.split("@")[0];
   const first=name.charAt(0).toUpperCase();

   avatar.innerText=first;
   avatar.style.background=createIdentityColor(name);
   avatar.classList.add("nav-avatar-online");

   const greeting=getAIGreeting();

   navUser.innerHTML=
   `<span class="avatar-name">${greeting} ${name} 👋</span>
    <a onclick="logoutUser()" class="logout-btn">Logout</a>`;

   if(animate){
     avatar.style.transform="scale(1.25)";
     setTimeout(()=>avatar.style.transform="scale(1)",250);
   }

 }else{

   if(loginBtn) loginBtn.style.display="block";

   avatar.style.display="none";
   navUser.style.display="none";
   navUser.innerHTML="";
   avatar.classList.remove("nav-avatar-online");
 }
}

function getAIGreeting(){
 const h=new Date().getHours();
 if(h>=5&&h<11)return"🌅 Selamat Pagi";
 if(h>=11&&h<15)return"☀️ Selamat Siang";
 if(h>=15&&h<19)return"🌤️ Selamat Sore";
 return"🌙 Selamat Malam";
}

function createIdentityColor(name){
 let hash=0;
 for(let i=0;i<name.length;i++){
  hash=name.charCodeAt(i)+((hash<<5)-hash);
 }
 return`linear-gradient(135deg,hsl(${hash%360},70%,45%),hsl(${(hash+80)%360},70%,55%))`;
}

function logoutUser(){
 localStorage.removeItem("fintechUser");
 fintechNavbarUpdate(null);
 showToast("Logout berhasil");
}

document.addEventListener("DOMContentLoaded",()=>{
 const saved=localStorage.getItem("fintechUser");
 if(saved) fintechNavbarUpdate(saved,false);
});

window.openLogin=openLogin;
window.openSignup=openSignup;
window.loginManual=loginManual;
window.loginGoogle=loginGoogle;
window.closeAuth=closeAuth;
window.logoutUser=logoutUser;
window.fintechNavbarUpdate=fintechNavbarUpdate;
