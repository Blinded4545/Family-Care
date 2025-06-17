
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainView } from './views/MainView'
import { JabonLiquido } from './views/JabonLiquido'
import { JabonManos } from './views/JabonManos'
import { JabonSolido } from './views/JabonSolido'
import { Detergentes } from './views/Detergentes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainView/>}></Route>
          <Route path='/jabon-corporal' element={<JabonLiquido/>}></Route>
          <Route path='/jabon-manos' element={<JabonManos/>}></Route>
          <Route path='/jabon-solido' element={<JabonSolido/>}></Route>
          <Route path='/detergentes' element={<Detergentes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
