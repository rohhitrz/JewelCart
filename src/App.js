// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Shopcategory  from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import  LoginSignUp  from './pages/LoginSignUp';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'




function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<Shopcategory banner ={men_banner} category="men"/>} />
          <Route path='/womens' element={<Shopcategory banner ={women_banner} category="women"/>} />
          <Route path='/kids' element={<Shopcategory  banner={kids_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>

          <Route path='/cart' element={<Cart/>} />

          <Route path='/login' element={<LoginSignUp/>} />
        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
