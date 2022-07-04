import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Product = ({
  id,
  title,
  image,
  price
}) => {
  const {addItem,inCart} = useGlobalContext();

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="product-info">
        <p><strong>Price: ${price}</strong></p>
        {
        inCart(id)?
        <button className="btn-incart">In cart !</button>:
        <button className="btn" onClick={()=>{addItem(id)}}>Add to cart</button>
      }
        <Link to={`/product/${id}`}>Details</Link>
      </div>
    </div>
  )
}

export default Product;