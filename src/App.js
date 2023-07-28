import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Health from './components/Health'
import Technology from './components/Technology'
import Business from './components/Business'
import Food from './components/Food'
import Celebrity from './components/Celebrity'
import PageNotFound from './components/PageNotFound'
import Home from './components/Home'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/health' element={<Health/>}/>
      <Route path='/technology' element={<Technology/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/celebrity' element={<Celebrity/>}/>
  <Route path='*' element={<PageNotFound/>}/>
      </Routes>

      
      
    </div>
  )
}

export default App
