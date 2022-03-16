import logo from './logo.svg';
import './App.css';
import Navabar from './Component/Navabar';
import Banner from './Component/Banner';
import Movielist from './Component/Movielist';
import Favourites from './Component/Favourites';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navabar/>
      <Routes>
        <Route path="/" element={<>
        <Banner/>
        <Movielist/>
        </>}
        />
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
