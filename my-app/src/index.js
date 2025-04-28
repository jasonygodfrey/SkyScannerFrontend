import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ correct import
import App from './App'; // ✅ your app
import './App.scss'; // ✅ your styles (or just './App.css' if you're not using scss)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
