const addData = (id)=>{
    const exsist = localStorage.getItem("shopping-cart");
    let shopping_cart = {};
    if(!exsist){
        shopping_cart[id] = 1;
    }
    else{
        shopping_cart = JSON.parse(exsist);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;

        }
        else{
            shopping_cart[id] = 1;
        }
        
        

    }

    localStorage.setItem("shopping-cart",JSON.stringify(shopping_cart))
    
}


//remove item from localStorage

const removeData = (id) => {
    const exsist = localStorage.getItem("shopping-cart");
    if (!exsist) {
    }
    else{
        const shopping_cart = JSON.parse(exsist);
        delete shopping_cart[id];
        localStorage.setItem("shopping-cart",JSON.stringify(shopping_cart))
    }
}

export {addData,removeData}