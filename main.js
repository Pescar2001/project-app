import { loadCartNumbers } from "./modules/load-cart-number.js";

let carts = document.querySelectorAll('.add-cart')

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', (e) =>{
    setCartItems(i)
    })
}


function setCartItems(i){
    const cartItems = localStorage.getItem("cartItems");

    if(cartItems){
        const cartItemsArray = JSON.parse(cartItems);
        const cartItemsIDs = cartItemsArray.map((cartItem)=>cartItem.productID)
        const searchItemId=cartItemsIDs.indexOf(i);

        if(searchItemId >= 0){
            const quantityLast = cartItemsArray[searchItemId].quantity;

            const copyArrayItems = cartItemsArray.map((item,i) =>i == searchItemId ? {"productID":item.productID,
            "quantity": quantityLast + 1
        } : item )

            localStorage.setItem("cartItems", JSON.stringify(copyArrayItems))
            
        }else{

            cartItemsArray.push({
                "productID":i,
                "quantity": 1
            })
            localStorage.setItem("cartItems",JSON.stringify(cartItemsArray)) 
        }

    }else{

        localStorage.setItem("cartItems",JSON.stringify([
            {
                "productID":i,
                "quantity": 1
            },
        ]))
        

    }
    loadCartNumbers();
}

loadCartNumbers()

