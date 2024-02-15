import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import { OtroTexto } from './components/OtroTexto';
import { CounterApp } from './components/CounterApp';
import './css/index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import ListCrud from './components/crudComponents/ListCrud';




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ListCrud />
        </Router>
        {/* <CounterApp value={0}/> */}
    </React.StrictMode>
 );