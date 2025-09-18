import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'aos/dist/aos.css';
import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';


AOS.init({ duration: 1000 });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
