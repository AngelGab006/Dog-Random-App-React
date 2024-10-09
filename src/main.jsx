import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Card } from "./component/card";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
  </StrictMode>,
)
