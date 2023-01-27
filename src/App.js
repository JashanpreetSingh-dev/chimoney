import './App.css';
import ListOfItems from './ListOfItems';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemPage from './ItemPage';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListOfItems />} />
      <Route path="/product/:id" element={<ItemPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
