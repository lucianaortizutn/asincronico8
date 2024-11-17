import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MiPrimerComponent from './components/MiPrimerComponent/MiPrimerComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiPrimerComponent text={'hola'} color={'green'} fontSize={3}/>
  </StrictMode>,
)
