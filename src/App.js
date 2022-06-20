import logo from './logo.svg';
import './App.css';
import { MuiNavbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <MuiNavbar/>
      <ItemListContainer greeting="Discover, collect, and sell extraordinary NFTs"/>
    </div>
  );
}

export default App;
