 import React from 'react'
import Cars from './components/Cars'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Rentedcars from './components/Rentedcars'
import Buycars from './components/Buycars'
import News from './components/News'
import CarDetails from './components/CarDetails'
 
 const App = () => {
   return (
     <div>
     <Navbar/>


       <Routes>
       <Route path='/' Component={Cars}></Route>
       <Route path='/Rentedcars' Component={Rentedcars}></Route>
       <Route path='/Buycars' Component={Buycars}></Route>
       <Route path='/News' Component={News}></Route>
       <Route path="/car/:id" Component={CarDetails} />
       </Routes>
     </div>
   )
 }
 
 export default App