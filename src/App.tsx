// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard'
import { BeasiswaCreate, BeasiswaEdit, BeasiswaList, BeasiswaShow } from './pages/beasiswa'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage/>}/>


          <Route path="/beasiswa">  
            <Route index element={<BeasiswaList />} />  
            <Route path="create" element={<BeasiswaCreate />} />  
            <Route path="edit/:id" element={<BeasiswaEdit />} />  
            <Route path="show/:id" element={<BeasiswaShow />} />  
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
