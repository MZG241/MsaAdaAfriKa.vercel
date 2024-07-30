import React from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter  , Routes , Route } from 'react-router-dom'


const App = () => {
  return (
   
 <div>
      <BrowserRouter>
<Routes>
  <Route   path='/registration' element={<Login/>}  />
  <Route   path='/' element={<Dashboard/>}  />
</Routes>
</BrowserRouter>
    </div>
   
  )
}

export default App