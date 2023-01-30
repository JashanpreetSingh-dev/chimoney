import './App.css';
import ListOfItems from './ListOfItems';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemPage from './ItemPage';
import React from 'react';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListOfItems />} />
      <Route path="/product/:productId" element={<ItemPage/>} />
      <Route path="/cart" element={<Cart></Cart>} />
      <Route path="/checkout" element={<CheckoutForm/>} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
