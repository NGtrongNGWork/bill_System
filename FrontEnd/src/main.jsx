import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './cardBill'
import './body.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
  </StrictMode>,
)
