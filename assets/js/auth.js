
function showLogin(){
const home=document.getElementById('home');
const login=document.getElementById('loginPage');
if(home) home.style.display='none';
if(login) login.style.display='block';
}
function showHome(){
const home=document.getElementById('home');
const login=document.getElementById('loginPage');
if(home) home.style.display='block';
if(login) login.style.display='none';
}
function openSignup(){
const popup=document.getElementById("signupPopup");
if(popup) popup.style.display="flex";
}
function closeSignup(){
const popup=document.getElementById("signupPopup");
if(popup) popup.style.display="none";
}
window.signupGoogle=function(){
alert("Login Google berhasil 😈");
closeSignup();
document.getElementById("memberDashboard").style.display="block";
}
window.signupNormal=function(){
const inputs=document.querySelectorAll("#signupPopup input");
let valid=true;
inputs.forEach(i=>{if(!i.value.trim()) valid=false;});
if(!valid){alert("Lengkapi data terlebih dahulu");return;}
alert("Pendaftaran berhasil!");
closeSignup();
document.getElementById("memberDashboard").style.display="block";
}
document.addEventListener("DOMContentLoaded",()=>{
const loginBtn=document.querySelector('#loginPage button');
if(loginBtn){
loginBtn.addEventListener('click',()=>{
const login=document.getElementById('loginPage');
const dash=document.getElementById('memberDashboard');
if(login) login.style.display='none';
if(dash) dash.style.display='block';
});
}
});

function setUserSession(){
  localStorage.setItem("isLogin","true");
}

function isLogged(){
  return localStorage.getItem("isLogin")==="true";
}
