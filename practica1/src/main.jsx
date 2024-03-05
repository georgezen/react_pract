import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import ListaTexto from './components/ListaTexto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App value={10}
      suma={'s'}
      restando={'r'}
      reset={'reset'} />
    <ListaTexto />


  </React.StrictMode>,
)
