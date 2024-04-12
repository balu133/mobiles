import { useEffect, useState } from 'react'
import './App.css'
import GetItem from './components/GetItem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
   const [items,setItems]=useState([])
   useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>{
      return res.json();
    })
    .then(data=>{
       setItems(data.products)
    });
   },[items]);
 
   return (
    <>
      <Header />
      <br />
      {items.length ? (
        <div className='container'>
          {items.map(item => (
            <GetItem product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar progress-bar-striped bg-danger" style={{ width: '100%' }}></div>
        </div>
      )}
      <Footer />
    </>
  );  
}
export default App
