import React from "react";
import "./Style.css";
function Footer() {
  return (
    <footer  className="footer">
      <p style={{ textAlign: "center" }}>Copyright © 2023 Patólogos del Cauca</p>
      <ul style={{ listStyleType: "none" }}>
        <li>Teléfono: +57 311 234 5678</li>
        <li>Correo electrónico: info@patologosdelcauca.com</li>
        <li>Redes sociales:
          <div>
            <a href="https://www.facebook.com/patologosdelcauca/">Facebook</a>
          </div>
          <div>
            <a href="https://twitter.com/patologosdelcauca/">Twitter</a>
          </div>
          <div>
            <a href="https://www.instagram.com/patologosdelcauca/">Instagram</a>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;


