import React from 'react'
import Navbar from './Components/Navbar.jsx'
import DisplayCards from './Components/DisplayCards.jsx'
import ProductCard from './Components/ProductCard.jsx'
import ProductPage from './Components/ProductPage.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from './SignIn';

const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  );
}

const HomePage = () => {
  return (
    <>
      <Navbar />
      <DisplayCards />
      <ProductCard />
      <ProductPage />
    </>
  );
}

export default Home
