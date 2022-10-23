const cart = [];

retriveItemCache();
cart.forEach((item) => displayItem(item));

console.log(cart);
function retriveItemCache() {
  const numberOfItems = localStorage.length;
  for (let i = 0; i < numberOfItems; i++) {
    const item = localStorage.getItem(localStorage.key(i));
    const itemObject = JSON.parse(item);
    cart.push(itemObject);
  }
  console.log(numberOfItems);
}

function displayItem(item) {
  const article = makeArticle(item);
  displayArticle(article);
  console.log(article);

  makeImageDiv(item);
}

//----creation--article----------------------------------
function displayArticle(article) {
  document.querySelector("#cart__items").appendChild(article);
}

function makeArticle(item) {
  const article = document.createElement("article");
  article.classList.add("cart__item");
  article.dataset.id = item.id;
  article.dataset.color = item.color;

  return article;
}

//------creation--image-----------------------------------
function makeImageDiv(item) {
  const div = document.createElement("div");
  div.classList.add("cart__item__img");

  const image = document.createElement("img");
  image.src = item.imageUrl;
  image.alt = item.altTxt;
  div.appendChild(image);
  return image;
}

//------creation--description_couleur_prix_produit--------
function makeCartItemContent() {
  const div = document.createElement("div");
  div.classList.add("cart__item__content");
}

function markeDescription(div, item) {
  const description = document.createElement("div");
  description.classList.add("cart__item__content__description");
  div.appendChild(description);

  const h2 = document.createElement("h2");
  h2.textContent = item.name;
  description.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = item.color;
  description.appendChild(p);

  const p2 = document.createElement("p");
  p2.textContent = item.price + " " + "€";
  description.appendChild(p2);
  return div;
}
