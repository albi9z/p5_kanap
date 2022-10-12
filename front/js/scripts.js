const url = "http://localhost:3000/api/products";

fetch(url)
  .then((response) => response.json())
  .then((data) => addProducts(data));

function addProducts(data) {
  data.forEach((kanap) => {
    console.log("product", kanap);

    //---recupération--des-donnees-------------
    const _id = data[0]._id;
    const name = data[0].name;
    const imageUrl = data[0].imageUrl;
    const description = data[0].description;
    const altTxt = data[0].altTxt;

    //data-creation-des--elements-----------------
    const anchor = makeAnchor(_id);
    const article = document.createElement("article");
    const image = makeImage(imageUrl, altTxt);
    const h3 = makeH3(name);
    const p = makeParagraphe(description);

    //---ajoute--les--elements-----------------
    appendArticleToAnchors(anchor, article);
    appendElementsToArticle(article, [image, h3, p]);
  });
}

function appendElementsToArticle(article, array) {
  array.forEach((item) => {
    article.appendChild(item);
  });
}

function makeAnchor(id) {
  const anchor = document.createElement("a");
  anchor.href = "./product.html?id=" + id;
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
