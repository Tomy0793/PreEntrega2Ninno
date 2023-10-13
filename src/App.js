import './App.css';
import ItemsListContainer from './components/ItemListContainer/ItemsListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path= '/home' element ={<ItemsListContainer/>}/>
        <Route path= '/' element ={<ItemsListContainer/>}/>
        <Route path= '/category/:id' element ={<ItemsListContainer/>}/>
        <Route path= '/item/:id' element ={<ItemDetailContainer/>}/>
        <Route path= '/cart' element ={<Cart/>}/>
        <Route path={"/checkout"} element={<Checkout/>} />
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div> 
  );
}

export default App;
