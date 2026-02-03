
(function(){
if(window.__AUTO_CORE_LOADED__) return;
window.__AUTO_CORE_LOADED__=true;

const modules=[
"assets/js/ui.js",
"assets/js/auth.js",
"assets/js/cart.js",
"assets/js/membership.js"
];

modules.forEach(loadScript);




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
