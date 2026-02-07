/* CORE SAFE ENGINE FINAL FIX */

(function(){

if(window.__AUTO_CORE_LOADED__) return;
window.__AUTO_CORE_LOADED__=true;

const BASE = location.pathname.includes("EmasDigital") ? "/EmasDigital/" : "";

const modules=[
BASE+"assets/js/ui.js",
BASE+"assets/js/auth.js",
BASE+"assets/js/cart.js",
BASE+"assets/js/membership.js"
];

function load(src){
return new Promise(res=>{
const s=document.createElement("script");
s.src=src;
s.defer=true;
s.onload=()=>res(true);
s.onerror=()=>res(false);
document.body.appendChild(s);
});
}

async function boot(){
for(const m of modules){
await load(m);
}

if(window.renderCart) renderCart();
if(window.updateFloatingCart) updateFloatingCart();
}

boot();

})();
