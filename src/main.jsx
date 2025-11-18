import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dog from './Dog.jsx'
import Cat from './Cat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dog />
    <Dog />
    <Dog />
    <Cat />
    <Cat />
  </StrictMode>,
)
