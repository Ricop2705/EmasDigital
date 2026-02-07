/* ======================================================
   CORE ZERO ERROR ENGINE 😈
   - Ultra Fintech Stable Loader
   - GitHub Production Safe
   - No Double Init
====================================================== */

(function(){

/* ====== PREVENT DOUBLE LOAD ====== */
if(window.__AUTO_CORE_LOADED__) return;
window.__AUTO_CORE_LOADED__ = true;

/* ====== AUTO BASE PATH (GITHUB SAFE) ====== */
const BASE = "./";


/* ====== MODULE LIST ====== */
const modules = [
  BASE + "assets/js/ui.js",
  BASE + "assets/js/auth.js",
  BASE + "assets/js/cart.js",
  BASE + "assets/js/membership.js"
];

/* ====== SAFE SCRIPT LOADER ====== */
function loadScript(src){
  return new Promise((resolve)=>{
    try{
      const s = document.createElement("script");
      s.src = src;
      s.defer = true;

      s.onload = () => resolve(true);

      /* ZERO ERROR MODE */
      s.onerror = () => {
        console.warn("⚠️ Module gagal load:", src);
        resolve(false); // tidak bikin crash
      };

      document.body.appendChild(s);
    }catch(err){
      console.warn("⚠️ Loader error:", err);
      resolve(false);
    }
  });
}

/* ====== AUTO BOOTSTRAP ENGINE ====== */
async function boot(){

  for(const m of modules){
    await loadScript(m);
  }

  /* restore cart kalau ada */
  if(window.renderCart) window.renderCart();
  if(window.updateFloatingCart) window.updateFloatingCart();

}

/* ====== START ENGINE ====== */
window.addEventListener("load", boot);

})();
