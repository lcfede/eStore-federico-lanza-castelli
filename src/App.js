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
import ShopProvider from './context/ShopContext';
import MainContainer from './layout/MainContainer';
import PurchaseSuccess from './components/PurchaseSuccess';
import Nikes from './components/Nikes';
import Login from './components/auth/Login';
import AuthProvider from './context/AuthContext';
import Register from './components/auth/Register';
import Reset from './components/auth/Reset';

function App() {
  return (
    <AuthProvider>
      <ShopProvider>
        <BrowserRouter>
          <MuiNavbar/>
          <MainContainer>
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/reset" element={<Reset />}/>
              <Route path="/nikes" element={<Nikes />}/>
              <Route path="/category/:category" element={<ItemListContainer />}/>
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/success/:id" element={<PurchaseSuccess />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </MainContainer>
        </BrowserRouter>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;
