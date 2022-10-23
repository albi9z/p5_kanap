const url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get("id");
if (id != null) {
  let itemPrice = 0;
  let imgUrl, altText, articleName;
}

fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => data_kanap(data));

//---affichage--des--produits---------------------

function data_kanap(description_kanap) {
  //---------------destructuring------------------
  //   const imageUrl = description_kanap.imageUrl;
  //   const colors = description_kanap.colors;
  //   const altTxt = description_kanap.altTxt;
  //   const description = description_kanap.description;
  //   const name = description_kanap.name;
  //   const price = description_kanap.price;

  const { imageUrl, colors, altTxt, description, name, price } =
    description_kanap;
  imgUrl = imageUrl;
  altText = altTxt;
  articleName = name;
  makeImage(imageUrl, altTxt);
  makeTitle(name);
  itemPrice = price;
  makePrice(price);
  makeDescription(description);
  makeColors(colors);
}

//---créations--des--elements---------------------

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  const parent = document.querySelector(".item__img");
  if (parent != null) parent.appendChild(image);
}

function makeTitle(name) {
  const h1 = document.querySelector("#title");
  if (h1 != null) h1.textContent = name;
}

function makePrice(price) {
  const span = document.querySelector("#price");
  if (span != null) span.textContent = price;
}

function makeDescription(description) {
  const p = document.querySelector("#description");
  if (p != null) p.textContent = description;
}

function makeColors(colors) {
  const select = document.querySelector("#colors");
  if (select != null) {
    colors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.textContent = color;
      select.appendChild(option);
    });
  }
}

//-----button--basket-----------------------------

const button = document.querySelector("#addToCart");
if (button != null) {
  button.addEventListener("click", clickCards);
}

function clickCards() {
  const color = document.querySelector("#colors").value;
  const quantity = document.querySelector("#quantity").value;

  //----locale--storage------------------------------
  saveOrder(color, quantity);
  if (orderIsInvalid(color, quantity)) return;

  window.location.href = "cart.html";
}

function saveOrder(color, quantity) {
  const data = {
    id: id,
    color: color,
    quantity: Number(quantity),
    price: itemPrice,
    imageUrl: imgUrl,
    altTxt: altText,
    name: articleName,
  };
  localStorage.setItem(id, JSON.stringify(data));
}

function orderIsInvalid(color, quantity) {
  if (color == null || color === "" || quantity == null || quantity == 0) {
    alert("please select a color and quantity");
    return true;
  }
}
