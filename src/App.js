import './App.css';
import Cart from './Cart';
import ListOfItems from './ListOfItems';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import ItemPage from './ItemPage';

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
