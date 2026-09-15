import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './CardBill/cardBill'
import Detail from './CardBill/Detail/Detail'
import './body.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Detail/>
  </StrictMode>,
)
