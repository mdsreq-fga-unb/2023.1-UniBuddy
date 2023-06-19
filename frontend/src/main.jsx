import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
);
