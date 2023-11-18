// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambia Switch por Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginBox from './components/LoginBox';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#e6eaf0', textAlign: 'center' }}>
        <Header />
        <Routes> {/* Cambia de Switch a Routes */}
          {/* Ruta para la página de inicio */}
          <Route path="/home" element={<Home />} />

          {/* Ruta por defecto para la pantalla de inicio de sesión */}
          <Route path="/" element={<LoginBox />} />
        </Routes> {/* Cambia de Switch a Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




