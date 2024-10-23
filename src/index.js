// src/index.js

import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom/client'; // Importa o método para renderização
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa os estilos do Bootstrap
import App from './App'; // Importa o componente App

// Cria o root para a aplicação
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Renderiza o componente App dentro do StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
