import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import Register from '../components/Ui/Register'
import Login from '../components/Ui/Login'
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/cars' element={<CarListing />}></Route>
    <Route path='/cars/:slug' element={<CarDetails />}></Route>
    <Route path='/blogs' element={<Blog />}></Route>
    <Route path='/blogs/:slug' element={<BlogDetails />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/*' element={<NotFound />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/login' element={<Login />}></Route>
  </Routes>
}

export default Routers