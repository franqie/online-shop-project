import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Footer from './pages/Footer';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="*" element={<Error/>}></Route>
          <Route path="/product/:id" element={<SingleProduct/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>    
    </Router>
  );
}

export default App;
