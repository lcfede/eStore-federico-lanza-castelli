import logo from './logo.svg';
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

function App() {
  return (
    <BrowserRouter>
      <MuiNavbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:id" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
