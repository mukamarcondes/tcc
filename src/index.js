import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './pages/funcionarios/funcionarios';
// import App from './pages/empresa/empresa';
import App from './pages/tecnico/tecnico';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
