let productInCart;

function addToCart(title, price, picturePath) {
  alert(`${title} added to cart`);
  let grabHand = localStorage.getItem("productInCart")
  let productDesc = {
    productName: title,
    cost: price,
    picture: picturePath
  }
  console.log(productDesc)
  // let grabHand = JSON.parse(localStorage.getItem("productsInCart"))
  //Note: this handles empty cart
  if (grabHand === null || grabHand === undefined) {
    productInCart = []
  } else {
    productInCart = JSON.parse(grabHand)
  }

  productInCart.push(productDesc)
  grabHand = JSON.stringify(productInCart);
  localStorage.setItem("productInCart", grabHand)
}

let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
let productsUL = document.querySelector("#cart-products");

function drawProducts(productsToDraw) {
  productsUL.innerHTML = "";

  let totalPrice = 0;
  for (let index = 0; index < productsToDraw.length; index++) {
    let product = productsToDraw[index];
    let li = document.createElement("li");
    productsUL.appendChild(li);
    let h3 = document.createElement("h3");
    h3.textContent = product.title;
    li.appendChild(h3);
    let img = document.createElement("img");
    img.setAttribute("alt", product.title);
    img.setAttribute("src", product.picturePath);
    li.appendChild(img);
    let p = document.createElement("p");
    p.textContent = `${product.price}`;
    li.appendChild(p);
    let btn = document.createElement("button");
    btn.setAttribute("onclick", `removeFromCart(${index})`);
    btn.textContent = "Remove from cart";
    li.appendChild(btn);

    totalPrice += product.price;
  }
  let priceText = document.querySelector(".displayPrice")
  priceText.textContent =`$${totalPrice}`
}



// Note: this invokes the drawProducts function when our page loads
drawProducts(productInCart);

// Note: this function removes an item at a provided index from the cart
function removeFromCart(i) {
  productInCart = productInCart.filter((value, index) => {
    return i !== index;
  });
  //Note: redraw products to screen...
  localStorage.setItem('productInCart', productInCart);
  drawProducts(productInCart);
  alert('removed from cart');
}
