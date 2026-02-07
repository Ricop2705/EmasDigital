/* ======================================================
   CORE SAFE ENGINE FINAL 😈
   SINGLE LOADER ONLY
====================================================== */

(function(){

if(window.__AUTO_CORE_LOADED__) return;
window.__AUTO_CORE_LOADED__ = true;

const BASE="./";

const modules=[
 BASE+"assets/js/ui.js",
 BASE+"assets/js/auth.js",
 BASE+"assets/js/cart.js",
 BASE+"assets/js/membership.js"
];

function loadScript(src){
 return new Promise(resolve=>{
  const s=document.createElement("script");
  s.src=src;
  s.defer=true;
  s.onload=()=>resolve(true);
  s.onerror=()=>resolve(false);
  document.body.appendChild(s);
 });
}

async function boot(){

 for(const m of modules){
   await loadScript(m);
 }

 requestAnimationFrame(()=>{
   if(window.renderCart) renderCart();
   if(window.updateFloatingCart) updateFloatingCart();
 });

}

boot();

})();
