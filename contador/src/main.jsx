import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import { OtroTexto } from './components/OtroTexto';
import './css/index.css';




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <OtroTexto />
        <App />
    </React.StrictMode>
 );