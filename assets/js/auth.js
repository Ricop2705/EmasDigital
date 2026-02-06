/* =====================================
   ULTRA FINTECH AUTH ENGINE (FINAL CLEAN)
   + IDENTITY + PRESENCE + AI GREETING
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

 fintechNavbarUpdate(email,true);

 showToast("Login berhasil 😈");
 closeAuth();
}

/* GOOGLE LOGIN SIMULASI */

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

/* =================================
🔥 ULTRA SUPER APP NAVBAR ENGINE
================================= */

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
   const firstLetter=name.charAt(0).toUpperCase();

   /* ===== IDENTITY ENGINE ===== */
   avatar.innerText=firstLetter;
   avatar.style.background=createIdentityColor(name);
   avatar.style.color="#fff";
   avatar.style.fontWeight="600";
   avatar.style.alignItems="center";
   avatar.style.justifyContent="center";

   /* ===== PRESENCE ENGINE ===== */
   avatar.classList.add("nav-avatar-online");

   /* ===== MEMBER BADGE ===== */
   let badge="";
   const member=localStorage.getItem("memberType");

   if(member){
     badge=`<span class="nav-badge">${member.toUpperCase()}</span>`;
     document.body.classList.add("vip-user");
   }

   /* ===== AI GREETING ===== */
   const greeting=getAIGreeting();

  navUser.innerHTML=`
<span class="avatar-name">${greeting} ${name} 👋</span>
${badge}
<a onclick="openProfile()" class="logout-btn">Profile</a>
<a onclick="logoutUser()" class="logout-btn">Logout</a>
`;

   /* ===== MOTION ENGINE ===== */
   avatar.style.transition="transform .35s ease, box-shadow .35s ease";
   navUser.style.transition="transform .35s ease, opacity .35s ease";

   if(animate){

     avatar.style.transform="scale(1.25)";
     avatar.style.boxShadow="0 0 14px rgba(212,175,55,.85)";

     navUser.style.transform="translateY(-6px)";
     navUser.style.opacity="0.4";

     setTimeout(()=>{
       avatar.style.transform="scale(1)";
       navUser.style.transform="translateY(0)";
       navUser.style.opacity="1";
     },280);
   }

 }else{

   if(loginBtn) loginBtn.style.display="block";

   avatar.style.display="none";
   navUser.style.display="none";
   navUser.innerHTML="";

   avatar.classList.remove("nav-avatar-online");

   document.body.classList.remove("vip-user");
 }
}

/* ===============================
   AI GREETING ENGINE
================================ */

function getAIGreeting(){

 const hour=new Date().getHours();

 if(hour>=5 && hour<11) return "🌅 Selamat Pagi";
 if(hour>=11 && hour<15) return "☀️ Selamat Siang";
 if(hour>=15 && hour<19) return "🌤️ Selamat Sore";

 return "🌙 Selamat Malam";
}

/* ===============================
   IDENTITY COLOR ENGINE
================================ */

function createIdentityColor(name){

 let hash=0;

 for(let i=0;i<name.length;i++){
   hash=name.charCodeAt(i)+((hash<<5)-hash);
 }

 const color1=`hsl(${hash%360},70%,45%)`;
 const color2=`hsl(${(hash+80)%360},70%,55%)`;

 return `linear-gradient(135deg, ${color1}, ${color2})`;
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
   fintechNavbarUpdate(savedUser,false);
 }

});
/* =====================================
   ULTRA PROFILE ENGINE
===================================== */

function openProfile(){
 const p=document.getElementById("profilePopup");
 if(p) p.classList.add("show");

 const profile=JSON.parse(localStorage.getItem("fintechProfile")||"{}");

 if(profile.nickname){
   document.getElementById("profileName").value=profile.nickname;
 }
}

function closeProfile(){
 const p=document.getElementById("profilePopup");
 if(p) p.classList.remove("show");
}

function saveProfile(){

 const name=document.getElementById("profileName").value;
 const pass=document.getElementById("profilePass").value;
 const file=document.getElementById("profileAvatar").files[0];

 let profile=JSON.parse(localStorage.getItem("fintechProfile")||"{}");

 if(name) profile.nickname=name;
 if(pass) profile.password=pass;

 if(file){
   const reader=new FileReader();
   reader.onload=function(e){
     profile.avatar=e.target.result;
     localStorage.setItem("fintechProfile",JSON.stringify(profile));
     applyProfile();
   };
   reader.readAsDataURL(file);
 }else{
   localStorage.setItem("fintechProfile",JSON.stringify(profile));
   applyProfile();
 }

 showToast("Profile diperbarui 😈");
 closeProfile();
}

function applyProfile(){

 const profile=JSON.parse(localStorage.getItem("fintechProfile")||"{}");
 const avatar=document.getElementById("navAvatar");

 if(profile.avatar && avatar){
   avatar.innerHTML=`<img src="${profile.avatar}" style="width:100%;height:100%;border-radius:50%">`;
 }
}
/* =====================================
   ULTRA ACCOUNT DASHBOARD ENGINE
===================================== */

function renderAccountDashboard(){

 const email=localStorage.getItem("fintechUser");
 if(!email) return;

 const name=email.split("@")[0];
 const avatar=document.getElementById("accountAvatar");
 const member=localStorage.getItem("memberType")||"FREE";

 if(avatar){
   avatar.innerText=name.charAt(0).toUpperCase();
   avatar.style.background=createIdentityColor(name);
 }

 const accName=document.getElementById("accountName");
 if(accName) accName.innerText=name;

 const accMember=document.getElementById("accountMember");
 if(accMember) accMember.innerText="Member "+member;

 const status=document.getElementById("accMemberStatus");
 if(status) status.innerText=member.toUpperCase();

 renderHistory();
}

/* RIWAYAT ORDER */
function renderHistory(){

 const box=document.getElementById("historyList");
 if(!box) return;

 const history=JSON.parse(localStorage.getItem("orderHistory")||"[]");

 box.innerHTML="";

 if(history.length===0){
   box.innerHTML="<p>Belum ada transaksi</p>";
   return;
 }

 history.forEach(h=>{
   const div=document.createElement("div");
   div.className="account-box";
   div.innerText=h.name+" - Rp "+h.price.toLocaleString("id-ID");
   box.appendChild(div);
 });

 const total=document.getElementById("accTotalOrder");
 if(total) total.innerText=history.length;
}

/* INIT DASHBOARD */
document.addEventListener("DOMContentLoaded",()=>{
 setTimeout(renderAccountDashboard,300);
});

/* expose global */
window.openLogin=openLogin;
window.openSignup=openSignup;
window.loginManual=loginManual;
window.loginGoogle=loginGoogle;
window.closeAuth=closeAuth;
window.logoutUser=logoutUser;
window.fintechNavbarUpdate=fintechNavbarUpdate;
