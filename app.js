const increaseButton = document.getElementById("quantity-plus");
const decreaseButton = document.getElementById("quantity-minus");
const seconditemincrease = document.getElementById("seconditemincrease");
const seconditemdecrease = document.getElementById("seconditemdecrease");

//get indiviual price

function getIndiviualSubtotal(product) {
  const itemInput = document.getElementById(product + "-price");
  const itemPrice = parseFloat(itemInput.innerText);
  return itemPrice;
}

//calculate total price

function calculatePrice() {
  const phonePrice = getIndiviualSubtotal("phone");
  const backpartPrice = getIndiviualSubtotal("backpart");
  let subtotal = phonePrice + backpartPrice;
  let tax = (subtotal * 10) / 100;
  let totalPrice = subtotal + tax;

  let subtotalField = document.getElementById("sub-total");
  let taxField = document.getElementById("tax-amount");
  let totalPriceField = document.getElementById("total-price");

  subtotalField.innerText = subtotal;
  taxField.innerText = tax;
  totalPriceField.innerText = totalPrice;

  //   console.log(phonePrice + backpartPrice);
  //   console.log(subtotalField);
}

//updated quantity and indiviual price and totalprice
function setQuantity(product, operation, productPrice) {
  //   debugger;
  var quantityInputField = document.getElementById(product + "-quantity");
  var currentQuantityValue = quantityInputField.value;
  var quantity = parseInt(currentQuantityValue);
  if (operation) {
    var updatedQuantity = quantity + 1;
  } else {
    var updatedQuantity = quantity - 1;
  }

  quantityInputField.value = updatedQuantity;

  let priceField = document.getElementById(product + "-price");
  let price = priceField.innerText;
  let totalIndiviualPrice = productPrice * updatedQuantity;
  priceField.innerText = totalIndiviualPrice;

  calculatePrice();
}

increaseButton.addEventListener("click", function () {
  const quantityUpdate = setQuantity("phone", true, 1219);
});

decreaseButton.addEventListener("click", function () {
  const quantityUpdate = setQuantity("phone", false, 1219);
});
seconditemincrease.addEventListener("click", function () {
  const quantityUpdate = setQuantity("backpart", true, 59);
});

seconditemdecrease.addEventListener("click", function () {
  const quantityUpdate = setQuantity("backpart", false, 59);
});
