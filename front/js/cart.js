const cart = [];

console.log(cart);

retriveItemCache();
cart.forEach((item) => displayItem(item));

function retriveItemCache() {
  const numberOfItems = localStorage.length;
  for (let i = 0; i < numberOfItems; i++) {
    const item = localStorage.getItem(localStorage.key(i));
    const itemObject = JSON.parse(item);
    cart.push(itemObject);

    console.log(numberOfItems);
  }
}

//--afficher-les-objets----
function displayItem(item) {
  const article = makeArticle(item);
  const divImage = makeImageDiv(item);
  article.appendChild(divImage);

  const cartItemContent = makeCartContent(item);
  article.appendChild(cartItemContent);
}

//--ID-items---------------
function displayArticle(article) {
  const idSection = document.querySelector("#cart__items");
  idSection.appendChild(article);
}

//----article--------------
function makeArticle(item) {
  const article = document.createElement("article");
  article.classList.add("cart__item");
  article.dataset.id = item.id;
  article.dataset.color = item.color;

  return article;
}

// //----image---------------
function makeImageDiv(item) {
  const cartItem = document.querySelector(".cart__item");
  const div = document.createElement("div");
  div.classList.add("cart__item__img");

  const image = document.createElement("img");
  image.src = item.imageUrl;
  image.alt = item.altTxt;
  div.appendChild(image);

  console.log("Image : " + image);

  return image;
}

//--div_cart_item_content---
function makeCartContent(item) {
  const cartItemContent = document.createElement("div");
  cartItemContent.classList.add("cart__item__content");

  const description = makeDescription(item);
  cartItemContent.appendChild(description);

  const setting = makeSetting(item);
  cartItemContent.appendChild(setting);

  return cartItemContent;
}

//----description-couleur- prix-
function makeDescription(item) {
  const description = document.createElement("div");
  description.classList.add("cart__item__content__description");

  const h2 = document.createElement("h2");
  h2.textContent = item.name;
  description.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = item.color;
  description.appendChild(p);

  const p2 = document.createElement("p");
  p2.textContent = item.price + " " + "€";
  description.appendChild(p2);

  return description;
}

//--setting-delete----------
function makeSetting(item) {
  const div = document.createElement("div");
  div.classList.add("cart__item__settings");

  const div2 = document.createElement("div");
  div2.classList.add("cart__item__settings__quantity");
  div.appendChild(div2);

  const p = document.createElement("p");
  p.textContent = item.quantity;
  div2.appendChild(p);

  const input = document.createElement("input");
  input.classList.add("itemQuantity");
  input.value = item.quantity;

  const div3 = document.createElement("div");
  div3.classList.add("cart__item__settings__delete");
  div.appendChild(div3);

  const p2 = document.createElement("p");
  p2.classList.add("deleteItem");
  p2.textContent = "Supprimer";
  div3.appendChild(p2);

  return div;
}
