import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import './style.css'
import { Button } from 'bootstrap';
function ProductDetails() {
  let { id } =useParams()
  const navigate=useNavigate();
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
 function handleNavigation(){
  navigate("/")
 }
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
      <div className='btn'>
      </div>
      <button className="btn btn-info" style={{marginLeft:"250px"}} onClick={handleNavigation}>
          Go To Homepage
        </button>
    </>
  );
}

export default ProductDetails;
