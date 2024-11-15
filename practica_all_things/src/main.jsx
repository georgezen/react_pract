import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import HomeAllThings from './components/HomeAllThings';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HomeAllThings />
    </BrowserRouter>
  </StrictMode>
)
