// ProductsArray[] fué generado previamente por las funciones collectData() y codeUpdate()
// dentro del elemnto <textarea de la línea 375 de index.html
const productsArray = [
  {
  productId: "0000",
  name: "Iced Americano",
  price: "$10.25",
  description: "Handcrafted from our custom blend of beans with a super-smooth flavor.",
  image: "/img/iced-americano.png",
  },
  {
  productId: "0001",
  name: "Iced Cappuccino",
  price: "$12.50",
  description: "Freshly brewed Cappuccino served chilled and sweetened over ice.",
  image: "/img/iced-cappuccino.png",
  },
  {
  productId: "0002",
  name: "Iced Espresso",
  price: "$14.25",
  description: "Our smooth Espresso over ice boasts rich flavor and caramelly sweetness.",
  image: "/img/iced-espresso.png",
  },
  {
  productId: "0003",
  name: "Iced Latte",
  price: "$11.50",
  description: "Our dark, rich espresso combined with milk and served over ice. A perfect milk-forward cooldown.",
  image: "/img/iced-latte.png",
  },
  {
  productId: "0004",
  name: "Hot Americano",
  price: "$8.50",
  description: "Espresso shots topped with hot water culminating in this wonderfully rich cup with depth and nuance.",
  image: "/img/hot-americano.png",
  },
  {
  productId: "0005",
  name: "Hot Cappuccino",
  price: "$9.50",
  description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.",
  image: "/img/hot-cappuccino.png",
  },
  {
  productId: "0006",
  name: "Hot Espresso",
  price: "$7.50",
  description: "Smooth signature Espresso with rich flavor and caramelly sweetness.",
  image: "/img/hot-espresso.png",
  },
  {
  productId: "0007",
  name: "Hot Latte",
  price: "$6.50",
  description: "Our dark, rich espresso balanced with steamed milk and a light layer of foam.",
  image: "/img/hot-latte.png",
  },
  {
  productId: "0008",
  name: "Strawberry Smoothie",
  price: "$12.50",
  description: "Perfect conbination of strawberries mixed with delicious yogurt and ice.",
  image: "/img/smoothie-1.png",
  },
  {
  productId: "0009",
  name: "Red Berry Smoothie",
  price: "$14.50",
  description: "Delicious combination of red fruit purees mixed with yogurt and ice.",
  image: "/img/smoothie-2.png",
  },
  {
  productId: "0010",
  name: "Pineapple Smoothie",
  price: "$16.50",
  description: "Frozen pineapple mixed with yogurt will make you feel like you're on a tropical island.",
  image: "/img/smoothie-3.png",
  },
  {
  productId: "0011",
  name: "Spinach Smoothie",
  price: "$18.50",
  description: "Go green and try one, ideal for packing in extra veg, flavour and nutrients in a flash.",
  image: "/img/smoothie-4.png",
  },
  {
  productId: "0012",
  name: "Pineapple Orange Lemonade",
  price: "$9.50",
  description: "Tropical flavors of pineapple and orange combine with refreshing lemonade to create a taste of sunshine in a cup.",
  image: "/img/special-01.jpg",
  },
  {
  productId: "0013",
  name: "Butter Croissant",
  price: "$9.50",
  description: "Classic butter croissant with soft, flaky layers and a golden-brown crust.",
  image: "/img/special-02.jpg",
  },
  {
  productId: "0014",
  name: "Special Sandwinch",
  price: "$9.50",
  description: "Delicious meat with bacon, topped with a melted slice of sharp Cheddar cheese—all on our signature croissant bun.",
  image: "/img/special-03.jpg",
  },
  {
  productId: "0015",
  name: "Strawberry Pavlova",
  price: "$9.50",
  description: "Beautiful strawberry pavlova with a crispy outer and soft centre.",
  image: "/img/special-04.jpg",
  },
  {
  productId: "0016",
  name: "Strawberry and Mint Lemonade",
  price: "$9.50",
  description: "Sweet strawberry and mint notes with the delightful zing of lemonade, served over ice with freeze-dried strawberry pieces.",
  image: "/img/special-05.jpg",
  },
  {
  productId: "0017",
  name: "Spinach, Feta & Meat Wrap",
  price: "$9.50",
  description: "Delicious meat combined with spinach, feta cheese and sun-dried tomato cream cheese inside a whole-wheat wrap.",
  image: "/img/special-06.jpg",
  },
];


if (document.readystate == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

// Modal

const openModal = document.querySelector('.btn-purchase');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close')

openModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal--show');
})

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
})



function ready() {
  let removeCartItemButtons = document.querySelectorAll('.btnRemove')
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
  }

  let quanitityInputs = document.querySelectorAll('.qtyField')
  for (let i = 0; i < quanitityInputs.length; i++) {
    var input = quanitityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  let addToCartButtons = document.querySelectorAll('.addToOrder')
  for (let i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
  }

  document.getElementById('btnPurchase').addEventListener('click', purchaseClicked)

  updateCartTotal()
  collectData()             //  Ejecuta collectData() 
}

function collectData (){    // Reune la información de productos desde index.html hacia un array de objetos
  const products = document.querySelectorAll(".listItem")
  const productDb =[]
  for(let i=0; i<products.length; i++){
    productDb[i]={}
    productDb[i].productId = String(i).padStart(4, '0')  // https://thewebdev.info/2022/04/19/how-to-convert-1-to-0001-in-javascript/#:~:text=To%20convert%20'1'%20to%20'0001'%20in%20JavaScript%2C,to%20call%20str.
    productDb[i].name = products[i].querySelector(".shop-item-title").innerText
    productDb[i].price = products[i].querySelector(".shop-item-price").innerText
    productDb[i].description = products[i].querySelector(".shop-item-description").innerText
    let index = products[i].querySelector(".shop-item-image").src.indexOf("/img")
    productDb[i].image = products[i].querySelector(".shop-item-image").src.slice(index)
    console.log(productDb[i])
  }
  console.log(productDb)
  codeUpdate(productDb)
}

function codeUpdate (productDb){  // Recibe el Array de Objetos y lo despliega con formato de javascript en una <textarea
  let codeText = `\n[\n`
  for(let i=0;i<productDb.length;i++){
    codeText += `{\n`
    codeText += `productId: "${productDb[i].productId}",\n`
    codeText += `name: "${productDb[i].name}",\n`
    codeText += `price: "${productDb[i].price}",\n`
    codeText += `description: "${productDb[i].description}",\n`
    codeText += `image: "${productDb[i].image}",\n`
    codeText += `},\n`
  }
  codeText += `]\n`
  
  document.getElementById('codeUpdate').innerHTML  += codeText
}

function purchaseClicked () {
  let resultado = updateCartTotal()
  let allCartEntries = document.querySelectorAll('.cart-row')
  for (let i = 0; i < allCartEntries.length; i++) {
    allCartEntries[i].remove()
  }
  document.querySelector('.cart-total-price').innerText = "$" + "0.00"
  // console.log(resultado)
  // window.alert(`Tu compra total fue ${resultado}`)
}

function removeCartItem() {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()

}

function updateCartTotal() {
  const cartItemContainer = document.getElementById('cartItems')
  const cartRows = cartItemContainer.querySelectorAll('.cart-row')
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.querySelector('.cart-price')
    let quantityElement = cartRow.querySelector('.cart-quantity-input')
    let price = parseFloat(priceElement.innerText.replace('$', ''))
    let quantity = quantityElement.value
    total = Math.floor(((total + price * quantity) * 100 + 0.5)) / 100
    } 
  document.querySelector('.cart-total-price').innerText = '$' + total.toFixed(2)
  return total
}

console.log(updateCartTotal())



function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
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


function addItemToCart(title, price, imageSrc) {
  const cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  const cartItems = document.getElementsByClassName('cart-items')[0]
  const cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  const cartItemQties = cartItems.getElementsByClassName('qtyField')
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
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
  `;
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)

  cartRow.querySelector('.btnRemove').addEventListener('click', removeCartItem)
  cartRow.querySelector('.qtyField').addEventListener('change', quantityChanged)
  updateCartTotal()

}




