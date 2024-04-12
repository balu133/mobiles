import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './style.css'
function ProductDetails() {
  let { id } =useParams();
  const [detail,setDetails]=useState([]);
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
        setDetails(data);
    });
  },[id]);
  console.log(detail);
  return (
    <>
      <div className='detail-box'>
       <table className='table table-success'>
         <thead>
          <tr>
          <th>Id</th>
          <th>Brand</th>
          <th>Price</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <th>{detail.id}</th>
            <th>{detail.title}</th>
            <th>${detail.price}</th>
          </tr>
         </tbody>
       </table>
      </div>
    </>
  );
}

export default ProductDetails;
