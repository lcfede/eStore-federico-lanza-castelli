import './App.css';
import { MuiNavbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import ShopProvider from './components/context/ShopContext';
import MainContainer from './layout/MainContainer';
import PurchaseSuccess from './components/PurchaseSuccess';
import Nikes from './components/Nikes';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <MuiNavbar/>
        <MainContainer>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/nikes" element={<Nikes />}/>
            <Route path="/category/:category" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/success" element={<PurchaseSuccess />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
