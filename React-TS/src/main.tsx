import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import layout from './layout.tsx'
import Layout from './layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
