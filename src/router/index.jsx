import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Doubts } from '../components/Doubts'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home title='Dashboard' />}/>
      <Route path='/duvidas' element={<Doubts title='Dúvidas Frequentes'/>}/>
    </Routes>
  )
}