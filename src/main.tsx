import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layouts/AppLayout.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
</StrictMode>
  
)
