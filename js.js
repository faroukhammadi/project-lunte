// CART

let cart = [];

function toggleCart() {

const cartSidebar =
document.getElementById("cart-sidebar");

cartSidebar.classList.toggle("open");

}

// ADD TO CART

function addToCart(name, price) {

cart.push({
name,
price
});

updateCart();

}

// UPDATE CART

function updateCart() {

const cartItems =
document.getElementById("cart-items");

const cartCount =
document.getElementById("cart-count");

const cartTotal =
document.getElementById("cart-total");

const checkoutBtn =
document.getElementById("checkout-btn");

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item, index) => {

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">

<div>
<h4>${item.name}</h4>
<p>${item.price} DA</p>
</div>

<button onclick="removeItem(${index})">
Supprimer
</button>

</div>
`;

});

cartCount.textContent = cart.length;

if(cart.length > 0){

cartTotal.style.display = "block";
checkoutBtn.style.display = "block";

cartTotal.textContent =
`Total: ${total} DA`;

}else{

cartItems.innerHTML =
"<p>Votre panier est vide</p>";

cartTotal.style.display = "none";
checkoutBtn.style.display = "none";

}

}

// REMOVE ITEM

function removeItem(index){

cart.splice(index, 1);

updateCart();

}

// CHECKOUT

function checkout(){

alert("Commande confirmée !");

cart = [];

updateCart();

toggleCart();

}

// CUSTOMIZATION

let currentModel =
"aviator";

function selectModel(element, model){

document
.querySelectorAll("[data-model]")
.forEach(item => {
item.classList.remove("active");
});

element.classList.add("active");

currentModel = model;

const preview =
document.getElementById("sunglasses-preview");

const previewName =
document.getElementById("preview-name");

preview.className =
`sunglasses-preview ${model}`;

if(model === "aviator"){

previewName.textContent =
"SolarVision Aviator Classic";

}

if(model === "clubmaster"){

previewName.textContent =
"SolarVision Clubmaster";

}

if(model === "wayfarer"){

previewName.textContent =
"SolarVision Wayfarer";

}

}

// SELECT COLOR

function selectColor(element, color){

document
.querySelectorAll(".option-category:nth-child(2) .option-item")
.forEach(item => {
item.classList.remove("active");
});

element.classList.add("active");

const preview =
document.getElementById("sunglasses-preview");

if(color === "black"){
preview.style.background = "#ddd";
}

if(color === "gold"){
preview.style.background = "#ffe58a";
}

}

// CUSTOM ADD TO CART

function addCustomToCart(){

const previewName =
document.getElementById("preview-name")
.textContent;

const price =
25000;

addToCart(previewName, price);

alert("Produit ajouté au panier !");

}