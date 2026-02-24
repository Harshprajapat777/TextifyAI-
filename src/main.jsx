import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import RoleSelection from './pages/RoleSelection.jsx'
import Workspace from './pages/Workspace.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/workspace/:role" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
