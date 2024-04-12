import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './ProductDetails';
function GetItem({product}) {
  
  return (
    <>
    <div className="box">
      <img src={product.thumbnail} key={product.id} />
      <Link to={`/product/${product.id}`} className='btn btn-success p-50'>View Details</Link>
    </div>
    </>
  )
}

export default GetItem
