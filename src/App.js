import './App.css';
import ItemsListContainer from './components/ItemListContainer/ItemsListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/home' element ={<ItemsListContainer/>}/>
        <Route path= '/' element ={<ItemsListContainer/>}/>
        <Route path= '/category/:id' element ={<ItemsListContainer/>}/>
        <Route path= '/item/:id' element ={<ItemDetailContainer/>}/>
        <Route path= '/cart' element ={<CartWidget/>}/>
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
