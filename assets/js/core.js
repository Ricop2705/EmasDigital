
(function(){
if(window.__AUTO_CORE_LOADED__) return;
window.__AUTO_CORE_LOADED__=true;

const BASE = location.hostname.includes("github.io")
  ? "/EmasDigital/"
  : "";

loadScript(BASE + "assets/js/ui.js");
loadScript(BASE + "assets/js/auth.js");
loadScript(BASE + "assets/js/cart.js");
loadScript(BASE + "assets/js/membership.js");



function loadScript(src){
return new Promise((resolve)=>{
const s=document.createElement("script");
s.src=src;
s.onload=resolve;
document.body.appendChild(s);
});
}

async function init(){
for(const m of modules){await loadScript(m);}
if(window.renderCart) renderCart();
if(window.updateFloatingCart) updateFloatingCart();
}
window.addEventListener("load",init);
})();
