// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard'
import { BeasiswaCreate, BeasiswaEdit, BeasiswaList, BeasiswaShow } from './pages/calon-penerima'
import { PenggunaCreate, PenggunaEdit, PenggunaList, PenggunaShow } from './pages/pengguna'
import { PengaturanPage } from './pages/pengaturan'
import BantuanPage from './pages/bantuan'
import { KriteriaCreate, KriteriaEdit, KriteriaList, KriteriaShow } from './pages/kriteria'

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


          <Route path="pengguna">
            <Route index element={<PenggunaList/>}/>
            <Route path="create" element={<PenggunaCreate />} />  
            <Route path="edit/:id" element={<PenggunaEdit />} />  
            <Route path="show/:id" element={<PenggunaShow />} />  
          </Route>


          <Route path="kriteria">
            <Route index element={<KriteriaList />} />  
            <Route path="create" element={<KriteriaCreate />} />  
            <Route path="edit/:id" element={<KriteriaEdit />} />  
            <Route path="show/:id" element={<KriteriaShow />} />
          </Route>

          <Route path="/pengaturan" element={<PengaturanPage/>}/>
          <Route path="/bantuan" element={<BantuanPage/>}/>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
