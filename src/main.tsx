import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainView } from './views/MainView.tsx'
import { JabonManos } from './views/JabonManos.tsx'
import { JabonCorporal } from './views/JabonCorporal.tsx'
import { JabonSolido } from './views/JabonSolido.tsx'
import { Detergente } from './views/Detergente.tsx'
import { Limpiadores } from './views/Limpiadores.tsx'
import { Contacto } from './views/Contacto.tsx'


import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' index element={<MainView/>} ></Route>
        <Route path='/jabon-manos' element={<JabonManos/>}></Route>
        <Route path='/jabon-liquido' element={<JabonCorporal/>}></Route>
        <Route path='/jabon-solido' element={<JabonSolido/>}></Route>
        <Route path='/detergente' element={<Detergente/>}></Route>
        <Route path='/desinfectantes' element={<Limpiadores/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)