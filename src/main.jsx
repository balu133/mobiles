import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import GetItem from './components/GetItem.jsx';
import ProductDetails from './components/ProductDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
