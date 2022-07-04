import React from 'react';
import { useGlobalContext } from '../context';

const Cart = () => {
  const {
    cart,
    removeItem,
    clearCart,
    changeCount
  } = useGlobalContext();

  let total = cart.reduce((total,cartItem)=>{
    const {price,quantity} = cartItem;
    const value = price*quantity;
    total += value;
    //console.log(price, count);
    return total;
  }, 0);

  total = total.toFixed(2);

  return (
    <div className="section cart-container">
      <h2>Shopping cart</h2>
      <div>
        {cart.map((item)=>{
          const {id,oldID,image,title,price,quantity} = item;
        return (
          <div className="cart-item" key={item.id}>
            <img src={image} alt={`${title.substring(0,10)}...`} />
            <div className="cart-title">
              <p>{title}</p>
              <p><strong>${price}</strong></p>
              <div className="btn-group">
                <button onClick={(e)=>{changeCount({id,e})}}>+</button>
                <span>{quantity}</span>
                <button onClick={(e)=>{changeCount({id,e})}}>-</button>
              </div>
            </div>
            <div>
              <button className="remove" onClick={()=>{removeItem({id,oldID})}}>
                Remove
              </button>
            </div>
          </div>
        )
        })}
      </div>
      {cart.length > 0 && <button className="btn-home" onClick={clearCart}>Clear cart</button>}
      <h3 className="title">Total: ${total}</h3>
    </div>
  )
}

export default Cart;