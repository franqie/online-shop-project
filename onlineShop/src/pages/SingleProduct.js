import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context';

const url = "https://fakestoreapi.com/products"; 

const SingleProduct = () => {
  const {addItem,inCart} = useGlobalContext();
  const {id} = useParams();
  const [loading, setLoading]  = React.useState(true);
  const [product, setProduct] = React.useState({});
 

  React.useEffect(()=>{
    const getProduct = async()=>{
      try{
        setLoading(true);
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();
        setLoading(false);
        setProduct(data);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    };
    getProduct()
  },[id]);

  if(loading){
    return <Loading/>
  };

  const {
    title,
    image,
    price,
    description,
    category,
    rating
  } = product;

  return (
    <div className="section">
      <Link to="/" className="btn-home">Back Home</Link>
      <div className="single-Product">
        <h3>{title}</h3>
        <img src={image} alt={title} className="product-image"/>
        <div>
          <h4>{category}</h4>
          <p>{description}</p>
          <h4>Price: ${price}</h4>
          {
            inCart(id)?
            <button className="btn-incart">In cart !</button>:
            <button className="btn" onClick={()=>{addItem(id)}}>Add to cart</button>
          }
          <p>Rating: {rating.rate}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;