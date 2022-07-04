export const reducer = (state,action)=>{
    if(action.type === "LOADING"){
        return {
            ...state,
            loading: true
        }
    };

    if(action.type === "GET_PRODUCTS"){
        return {
            ...state,
            loading: false,
            products: action.payload
        }
    };

    if(action.type === "NOT_LOADING"){
        return {
            ...state,
            loading: false
        }
    };

    if(action.type === "ADD_ITEM"){    
        const newItem = state.products.find((item)=>{ 
             return item.id === parseInt(action.payload);
        });

        const newCartItem = {
            oldID: newItem.id,
            id: new Date().getTime().toString(),
            title: newItem.title,
            image: newItem.image,
            price: newItem.price,
            quantity: newItem.quantity
        };

        
        const upDatedCart = state.cart.map((item)=>{
            if(item.oldID === parseInt(action.payload)){
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });      
        // console.log(upDatedCart);

        const checkCart = state.cart.findIndex((cartItem)=>{
            return cartItem.oldID === parseInt(action.payload);
        });
        // console.log(checkCart);
        // console.log(state.cart);

        if(checkCart !== -1){
            return {
                ...state,
                cart: [...upDatedCart],
                showModal: true,
                modalText: "Item added successfully!"
            }
        };

        return {
            ...state,
            // products: newProducts,
            cart: [...state.cart, newCartItem],
            showModal: true,
            modalText: "Item added successfully!"
        }
    };

    if(action.type === "REMOVE_ITEM"){
        const newProducts = state.products.map((item)=>{
            if(item.id === parseInt(action.payload.oldID)){
                 return {...item, rating:{...item.rating, count: item.rating.count + item.quantity}}
            }
            return item;
        });

        const newItem = state.cart.filter((item)=>{ 
            return item.id !== action.payload.id;
        });
        
        return {
            ...state,
            products: newProducts,
            cart: newItem,
            showModal: true,
            modalText: "Item removed successfully!"
        }
    };

    if(action.type === "CLOSE_MODAL"){
        return {
            ...state,
            showModal: false
        }
    };

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            // products: action.payload,
            cart: [],
            showModal: true,
            modalText: "Cart cleared!"
        }
    };

    if(action.type === "CHANGE_COUNT"){
        const btn = action.payload.e.target.textContent;
        const newCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                if(btn === "+"){
                    return {...item, quantity: item.quantity + 1}
                } else if (btn === "-" && item.quantity > 1){
                    return {...item, quantity: item.quantity - 1}
                }
            }
            return item;
        });
        return {
            ...state,
            cart: newCart
        };
    };

    if(action.type === "GET_TOTALS"){
        let totalCount = state.cart.reduce((totalCount,cartItem)=>{
        const {quantity} = cartItem;
        totalCount += quantity;
        return totalCount;
    }, 0);

        return { 
            ...state,
            cartCount: totalCount
        };
    }
    return state;
};