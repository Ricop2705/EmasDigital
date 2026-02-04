/* =================================================
   ULTRA FINTECH CART ENGINE - STABLE CLEAN VERSION
   TANPA MERUBAH SISTEM YANG SUDAH ADA
================================================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ===============================
   ADD TO CART
================================ */
function addToCart(product){

  const item = cart.find(i => i.id === product.id);

  if(item){
    item.qty++;
  }else{
    cart.push({...product, qty:1});
  }

  saveCart();
  renderCart();
  updateFloatingCart();
  animateCart();

  if(typeof showToast==="function"){
    showToast("Produk masuk keranjang 🛒");
  }
}

/* ===============================
   QTY CONTROL
================================ */
function increaseQty(id){
  const item = cart.find(i => i.id === id);
  if(!item) return;

  item.qty++;
  saveCart();
  renderCart();
  updateFloatingCart();
}

function decreaseQty(id){
  const item = cart.find(i => i.id === id);
  if(!item) return;

  item.qty--;

  if(item.qty <= 0){
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  renderCart();
  updateFloatingCart();
}

function removeItem(id){
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
  updateFloatingCart();
}

/* ===============================
   RENDER CART
================================ */
function renderCart(){

  const box = document.getElementById("cartItems");
  const empty = document.getElementById("emptyCart");

  if(!box) return;

  box.innerHTML = "";

  if(cart.length === 0){
    if(empty) empty.style.display="block";
    return;
  }

  if(empty) empty.style.display="none";

  let total = 0;

  cart.forEach(item => {

    total += item.price * item.qty;

    const div = document.createElement("div");
    div.style.display="flex";
    div.style.justifyContent="space-between";
    div.style.alignItems="center";
    div.style.margin="10px 0";

    div.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        Rp ${item.price.toLocaleString("id-ID")}
      </div>
      <div>
        <button onclick="decreaseQty(${item.id})">−</button>
        <strong style="margin:0 8px">${item.qty}</strong>
        <button onclick="increaseQty(${item.id})">+</button>
        <button onclick="removeItem(${item.id})">🗑️</button>
      </div>
    `;

    box.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.style.marginTop="15px";
  totalDiv.innerHTML =
    `<strong>Total: Rp ${total.toLocaleString("id-ID")}</strong>`;

  box.appendChild(totalDiv);

  updatePaymentTotal(); // sync total ke payment panel
}

/* ===============================
   FLOATING CART
================================ */
function updateFloatingCart(){

  const count = document.getElementById("cartCount");
  const floating = document.getElementById("floatingCart");

  if(!count || !floating) return;

  const totalQty = cart.reduce((sum,i)=>sum+i.qty,0);

  count.innerText = totalQty;
  floating.style.display = totalQty>0 ? "block":"none";

  if(typeof ultraFloatEngine==="function"){
    ultraFloatEngine();
  }
}

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ===============================
   MINI ANIMATION
================================ */
function animateCart(){
  const el = document.getElementById("floatingCart");
  if(!el) return;

  el.style.transform="scale(1.18)";
  setTimeout(()=> el.style.transform="scale(1)",200);
}

/* ===============================
   REAL CHECKOUT FLOW
================================ */
function checkoutGold(){

  if(cart.length === 0){
    if(typeof showToast==="function"){
      showToast("Keranjang kosong");
    }
    return;
  }

  if(typeof openPayment==="function"){
    openPayment();
  }
}

/* ===============================
   PAYMENT FLOW ENGINE
================================ */
function payNow(method){

  if(cart.length === 0){
    alert("Keranjang kosong");
    return;
  }

  if(typeof closePayment==="function"){
    closePayment();
  }

  showProcessing();
}

/* ===============================
   FINTECH SUCCESS FLOW
================================ */
function showProcessing(){

  const panel = document.getElementById("successPanel");
  const order = document.getElementById("orderId");

  if(!panel) return;

  const orderNumber =
    "ORD-" + Date.now().toString().slice(-6);

  if(order){
    order.innerText = "Nomor Order: " + orderNumber;
  }

  panel.classList.add("show");

  cart = [];
  saveCart();
  renderCart();
  updateFloatingCart();
}

function closeSuccess(){
  const panel = document.getElementById("successPanel");
  if(panel) panel.classList.remove("show");
}

/* ===============================
   PAYMENT TOTAL SYNC
================================ */
function updatePaymentTotal(){

  const el = document.getElementById("paymentTotal");
  if(!el) return;

  const total =
    cart.reduce((sum,i)=>sum+(i.price*i.qty),0);

  el.innerText =
    "Total Bayar: Rp " + total.toLocaleString("id-ID");
}

/* HARD FALLBACK PAYMENT ENGINE
   supaya checkout tidak mati di GitHub Pages */

if(typeof openPayment !== "function"){

  window.openPayment = function(){
    const p = document.getElementById("paymentPanel");
    if(p){
      p.classList.add("show");
    }else{
      console.warn("paymentPanel tidak ditemukan");
    }
  };

  window.closePayment = function(){
    const p = document.getElementById("paymentPanel");
    if(p){
      p.classList.remove("show");
    }
  };
}


/* ===============================
   GLOBAL EXPOSE (WAJIB)
================================ */
window.addToCart = addToCart;
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;
window.removeItem = removeItem;
window.checkoutGold = checkoutGold;
window.payNow = payNow;
window.closeSuccess = closeSuccess;
