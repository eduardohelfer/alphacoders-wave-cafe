
if(document.readystate == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  let removeCartItemButtons = document.querySelectorAll('.btnRemove')
  console.log(removeCartItemButtons)
  for(let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }  

  let quanitityInputs = document.querySelectorAll('.qtyField')
  for (let i=0; i< quanitityInputs.length; i++){
    var input = quanitityInputs[i]
    input.addEventListener ('change', quantityChanged)
  }

  let addToCartButtons = document.querySelectorAll('.addToOrder')
  for(let i=0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }

  document.getElementById('btnPurchase').addEventListener('click', purchaseClicked)

  updateCartTotal()
}

function removeCartItem() {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove() 
  updateCartTotal()
  
}


function updateCartTotal(){
  const cartItemContainer = document.getElementById('cartItems')
  const cartRows = cartItemContainer.querySelectorAll('.cart-row')
  let total=0
  for(let i=0; i< cartRows.length; i++){
    let cartRow = cartRows[i]
    let priceElement = cartRow.querySelector('.cart-price')
    let quantityElement = cartRow.querySelector('.cart-quantity-input')
    let price = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = quantityElement.value
    total = Math.floor(((total + price*quantity)*100+0.5))/100
  }
  document.querySelector('.cart-total-price').innerText = '$' + total.toFixed(2)

}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <=0){
    input.value=1
  }
  updateCartTotal()
}



function addToCartClicked(event) {
  let buttonClicked = event.target
  let shopItem = buttonClicked.parentElement.parentElement
  let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
}


function addItemToCart (title,price,imageSrc){
  const cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  const cartItems = document.getElementsByClassName('cart-items')[0]
  const cartItemNames =  cartItems.getElementsByClassName('cart-item-title')
  const cartItemQties =  cartItems.getElementsByClassName('qtyField')
  for(var i=0; i< cartItemNames.length; i++){
    if(cartItemNames[i].innerText==title){
      /* alert('This item is already added to the cart') */
      cartItemQties[i].value++
      updateCartTotal()
      return
    }
  }
  cartRowContents =
  `
                  <div class="cart-item cart-column">
                      <img src="${imageSrc}" alt="hot-americano" class="cart-item-image" width="80" height="80">
                      <span class="cart-item-title">${title}</span>
                  </div>
                  <span class="cart-price cart-column">${price}</span>
                  <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input qtyField"  type="number" value="1">
                    <button class="btn remove-item-btn btnRemove">REMOVE</button>
                  </div>
  `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
 
  cartRow.querySelector('.btnRemove').addEventListener('click', removeCartItem)
  cartRow.querySelector('.qtyField').addEventListener('change', quantityChanged)
  updateCartTotal()

}


