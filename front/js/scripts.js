const url = "http://localhost:3000/api/products";

fetch(url)
  .then((response) => response.json())
  .then((data) => addProducts(data));

function addProducts(data) {
  data.forEach((products) => {
    //---recupération--des-donnees---------------
    // const _id = data._id;
    // const name = data.name;
    // const imageUrl = data.imageUrl;
    // const altTxt = data.altTxt;
    // const description = data.description;

    //---destructuring---------------------------

    const { _id, name, imageUrl, altTxt, description } = products;

    //data-creation-des--elements-----------------
    const anchor = makeAnchor(_id);
    const article = document.createElement("article");
    const image = makeImage(imageUrl, altTxt);
    const h3 = makeH3(name);
    const p = makeParagraphe(description);

    //---ajoute--les--elements--------------------
    appendElementsToArticle(article, image, h3, p);
    appendArticleToAnchors(anchor, article);
  });
}

function appendElementsToArticle(article, image, h3, p) {
  article.appendChild(image);
  article.appendChild(h3);
  article.appendChild(p);
}

function makeAnchor(_id) {
  const anchor = document.createElement("a");
  anchor.href = "./product.html?id=" + _id;
  return anchor;
}

function appendArticleToAnchors(anchor, article) {
  const items = document.getElementById("items");
  if (items != null) {
    items.appendChild(anchor);
    anchor.appendChild(article);
  }
}

function makeImage(imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  image.removeAttribute("title");
  image.removeAttribute("style");
  return image;
}

function makeH3(name) {
  const h3 = document.createElement("h3");
  h3.textContent = name;
  h3.classList = "productName";
  return h3;
}

function makeParagraphe(description) {
  const p = document.createElement("p");
  p.textContent = description;
  p.classList = "productDescription";
  return p;
}
