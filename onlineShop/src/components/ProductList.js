import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Product from './Product';

const ProductsList = () => {
  const {loading,products} = useGlobalContext();

  if(loading){
    return <Loading/>
  };

  if(products.length < 1){
    return (
      <div className="section">
        <h4 className="title"><i>No products available...</i></h4>
      </div>
    )
  };

  return (
    <div className="section">
      <div className="container">
        {products.map((item)=>{
          return <Product key={item.id} {...item}/>
        })}
      </div>
    </div>
  )
}

export default ProductsList;