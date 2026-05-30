import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { SavingProvider } from './context/SavingContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SavingProvider>
      <App />
      </SavingProvider>
    </BrowserRouter>
  </StrictMode>,
)

//RÖR EJ.