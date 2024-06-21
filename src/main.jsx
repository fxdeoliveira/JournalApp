import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { JApp } from './JApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <JApp />
    </BrowserRouter>
  </React.StrictMode>,
)
