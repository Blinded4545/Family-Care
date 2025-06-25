
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainView } from './views/MainView'
import { JabonManos } from './views/JabonManos'
import { JabonCorporal } from './views/JabonCorporal'
import { JabonSolido } from './views/JabonSolido'
import { Detergente } from './views/Detergente'
import { Limpiadores } from './views/Limpiadores'
import { Contacto } from './views/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<MainView/>} ></Route>
          <Route path='/jabon-manos' element={<JabonManos/>}></Route>
          <Route path='/jabon-liquido' element={<JabonCorporal/>}></Route>
          <Route path='/jabon-solido' element={<JabonSolido/>}></Route>
          <Route path='/detergente' element={<Detergente/>}></Route>
          <Route path='/desinfectantes' element={<Limpiadores/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
