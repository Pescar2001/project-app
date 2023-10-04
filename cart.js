import { loadCartNumbers } from "./modules/load-cart-number.js";

const products= [
    { name:'PROTEIN', price:30, tag:"protein-normal" },
    {name:'PROTEIN-GOLD', price:80, tag:"protein-gold" },
    { name:'PROTEIN-MAX', price:50, tag:"protein-max"},
    { name:'PROTEIN++', price:60, tag:"protein+"},
    { name:'CREATINE-MONOHYDRATE', price:40, tag:"creatine-mono"},
    { name:'CREATINE-CAPS', price:45, tag:"creatine-caps"},
    { name:'CREATINE-EXPLODE', price:55, tag:"creatine-explode"},
    { name:'PRE-WORKOUT', price:35, tag:"prework"},
    { name:'PRE-WORKOUT-C4', price:45, tag:"prework-c4"},
    { name:'PRE-WORKOUT-EXTREME', price:35, tag:"prework-extreme"}
];

function deleteItems(index){
    let cartItems= localStorage.getItem("cartItems");

    let cartItemsArray = cartItems ?  JSON.parse(cartItems) : null;

    const newCartItemsArray = cartItemsArray.filter((item,i)=> i !== index && item)
    console.log(newCartItemsArray)

    localStorage.setItem("cartItems", JSON.stringify(newCartItemsArray))
    location.reload()

}




function displayCart() {
    let cartItems= localStorage.getItem("cartItems");

    let cartItemsArray = cartItems ?  JSON.parse(cartItems) : null; 
    let productContainer=document.querySelector(".products");
    let totalCost = 0;

    if(cartItems && productContainer) {
        productContainer.innerHTML='';


        cartItemsArray.map((item,i) => {
           

            const { productID, quantity} = item;
            const product = products[productID];

            totalCost += quantity * product.price;

            productContainer.innerHTML += `
            <div class="product">
                 <div >
                 <ion-icon name="close-circle-outline" class="delete" ></ion-icon>
                 <div class="product-title">
       
                     <img src="./images/${product.tag}.png">
                     <span>${product.name} </span>
 
                 </div>
                 </div>

                


            



                <span class="price"> ${product.price}$</span>

             <span class="quantity"> ${quantity} </span> 

             
             </div> 
            ${i === (cartItemsArray.length - 1) ? `             <div class="total">Total: ${totalCost} $ </div> 
            `: ``}
             
            `
        })
    } else if (productContainer) {
        productContainer.innerHTML += `
        <h2>Cosul tau este gol</h2>`
    }
}

function calculateTotalCart ()  {
    let cartItems= localStorage.getItem("cartItems");

    let cartItemsArray = cartItems ?  JSON.parse(cartItems) : null;



}



displayCart();
loadCartNumbers();

const deleteButtons = document.querySelectorAll(".delete")

for (let i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', (e) =>{
    deleteItems(i)
    })
}

