let shoppingCartQty = 0;
let shoppingCartPrices = 0;
const hearts = document.querySelectorAll('.heart');
// function to calculate the total number and price of product
const tweakCart=(qty, prices)=>{
    if(shoppingCartQty+qty < 0){
        return alert('Not enough items in cart, please add items');
    }
    shoppingCartQty += qty;
    shoppingCartPrices += prices
// funtion to update the number of products added to the cart already in the html
    document.querySelector('.cart-quantity').innerHTML =  shoppingCartQty
}
// function to check content of the cart
const checkCart=()=>{
    if (shoppingCartQty==0) {
        return alert('Your cart is empty, please add items');
    }else{
    return alert(`you have: ${shoppingCartQty} items at $${shoppingCartPrices}`)
    }
}
// function for the like and unlike function
hearts.forEach(heart => {
    heart.addEventListener('click', () =>{
        heart.classList.toggle('liked');
    });
}

)