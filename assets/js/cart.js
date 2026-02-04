
let cart=JSON.parse(localStorage.getItem("cart"))||[];
function addToCart(product){
const item=cart.find(i=>i.id===product.id);
if(item){item.qty++;}else{cart.push({...product,qty:1});}
saveCart();renderCart();updateFloatingCart();
}
function increaseQty(id){
const item=cart.find(i=>i.id===id);
if(!item)return;
item.qty++;saveCart();renderCart();updateFloatingCart();
}
function decreaseQty(id){
const item=cart.find(i=>i.id===id);
if(!item)return;
item.qty--;
if(item.qty<=0){cart=cart.filter(i=>i.id!==id);}
saveCart();renderCart();updateFloatingCart();
}
function removeItem(id){
cart=cart.filter(i=>i.id!==id);
saveCart();renderCart();updateFloatingCart();
}
function renderCart(){
  const box = document.getElementById("cartItems");
  const empty = document.getElementById("emptyCart");
  if(!box) return;

  box.innerHTML = "";

  if(cart.length===0){
    if(empty) empty.style.display="block";
    return;
  }

  if(empty) empty.style.display="none";

  let total=0;

  cart.forEach(item=>{
    total+=item.price*item.qty;

    const div=document.createElement("div");
    div.style.display="flex";
    div.style.justifyContent="space-between";
    div.style.alignItems="center";
    div.style.margin="10px 0";

    div.innerHTML=`
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

  const totalDiv=document.createElement("div");
  totalDiv.style.marginTop="15px";
  totalDiv.innerHTML=`<strong>Total: Rp ${total.toLocaleString("id-ID")}</strong>`;
  box.appendChild(totalDiv);
}

function updateFloatingCart(){
const count=document.getElementById("cartCount");
const floating=document.getElementById("floatingCart");
if(!count||!floating)return;
const totalQty=cart.reduce((sum,i)=>sum+i.qty,0);
count.innerText=totalQty;
floating.style.display=totalQty>0?"block":"none";
if(typeof ultraFloatEngine==="function") ultraFloatEngine();
}
function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
}
window.addToCart=addToCart;
window.increaseQty=increaseQty;
window.decreaseQty=decreaseQty;
window.removeItem=removeItem;

function addToCart(product){

  const item = cart.find(i=>i.id===product.id);

  if(item){
    item.qty++;
  }else{
    cart.push({...product,qty:1});
  }

  saveCart();
  renderCart();
  updateFloatingCart();

  /* REAL STORE FEEDBACK */
  showToast("Produk masuk keranjang 🛒");
}

/* ===============================
   REAL CHECKOUT FLOW
================================ */
function checkoutGold(){

  if(cart.length===0){
    showToast("Keranjang kosong");
    return;
  }

  const summary = cart
    .map(i => `${i.name} x${i.qty}`)
    .join("%0A");

  window.open(
    "https://wa.me/6285717442694?text=Halo%20Saya%20ingin%20checkout:%0A"+summary,
    "_blank"
  );
}

/* expose ke HTML button */
window.checkoutGold = checkoutGold;

