import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Products from './components/Pages/Products'
import Header from './components/Header/Header'
import Footer from './components/Sections/Footer/Footer'



const App = () => {
  return (
    <div>
   
      <BrowserRouter>

 <Header/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>
        <Route path='/products'element={<Products/>}></Route>
        <Route path='/contact'element={<Contact/>}></Route>
      </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
