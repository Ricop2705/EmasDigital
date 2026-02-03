
(function(){
if(window.__AUTO_CORE_LOADED__) return;
window.__AUTO_CORE_LOADED__=true;

  const BASE = location.hostname.includes("github.io")
  ? "/EmasDigital/"
  : "";
const modules=[
 BASE + "assets/js/ui.js",
 BASE + "assets/js/auth.js",
 BASE + "assets/js/cart.js",
 BASE + "assets/js/membership.js"
];

modules.forEach(loadScript);

})();


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
