const html = items.results
  .map(function (item) {
    var code = ""
    if (item.currency_code === "GBP") {
      code += "&pound;"
    } else if (item.currency_code === "EUR") {
      code += "&euro;"
    } else {
      code += "$"
    }

    return `
  <div class="product">
    <img class="whiskeyImage" src="${decodeURI(item.Images[0].url_170x135)}" />
    <img class="heartImg" src="./assets/heart.png" />
    <p id="productName" >${item.title}</p>
    <p class="price">${code}${item.price}</p>
  </div>
  `
  })
  .join("")

document.querySelector("#products").innerHTML = html