export function loadCartNumbers() {
    const cartItems = localStorage.getItem('cartItems')
    if(cartItems){
        const cartItemsArray = JSON.parse(localStorage.getItem('cartItems'));

        //eu folosesc reducer pentru a aduna toate cantitatile
        const productNumbers = cartItemsArray.reduce((acc,curr)=>acc+curr.quantity,0)

        if (productNumbers) {
            document.querySelector('.cart span').textContent=productNumbers;
    }
    
    }else{
        document.querySelector('.cart span').textContent=0;
    }
}