 import React from 'react';
import { useContext, createContext } from 'react';
import { reducer } from './reducer';

const url = "https://fakestoreapi.com/products"; 

const AppContext = createContext();




const defaultState = {
  loading: false,
  products: [],
  cart: [],
  cartCount: 0,
  showModal: false,
  modalText: ""
};

const AppProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer,defaultState);
    const [defaultProducts, setDefaultProducts] = React.useState([]);

    const fetchProducts = async()=>{
      dispatch({type:"LOADING"});
      try{
        const response = await fetch(url);
        const data = await response.json();
        const newData = data.map((item)=>{
          return {...item, quantity: 1}
        });
        dispatch({type:"GET_PRODUCTS",payload:newData});
        setDefaultProducts(data);        
      } catch(error) {
        console.log(error);
        dispatch({type:"NOT_LOADING"});
      }
    };

    React.useEffect(()=>{
      dispatch({type:"GET_TOTALS"})
    },[state.cart]);

    React.useEffect(()=>{
      fetchProducts();
    },[])

    const addItem = (id)=>{
      dispatch({type:"ADD_ITEM",payload:id});
    };

    React.useEffect(()=>{
      const timer = setTimeout(() => {
        dispatch({type:"CLOSE_MODAL"});
      }, 3000);
 
      return ()=>clearTimeout(timer);
    },[state.showModal,state.modalText]);


    const removeItem = (idObj)=>{
      dispatch({type:"REMOVE_ITEM",payload:idObj});
    };

    const clearCart = ()=>{
      dispatch({type:"CLEAR_CART",payload:defaultProducts});
    };

    const changeCount = (obj)=>{
      dispatch({type:"CHANGE_COUNT", payload: obj});
    };

    const inCart = (id)=>{
      const checkCart = state.cart.some((cartItem)=>{
          return cartItem.oldID === parseInt(id);
        })
      return checkCart;
    };


  const {
    loading,
    products,
    cart,
    cartCount,
    showModal,
    modalText
  } = state;
  return <AppContext.Provider value={
    {
      loading,
      products,
      showModal,
      modalText,
      cart,
      cartCount,
      addItem,
      removeItem,
      clearCart,
      changeCount,
      inCart
    }
  }>{children}</AppContext.Provider>
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppProvider, useGlobalContext};