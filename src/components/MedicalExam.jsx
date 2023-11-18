// MedicalExam.jsx
import React from "react";
import "./Style.css";

const MedicalExam = ({ name, date }) => {
  const simulateDownload = () => {
    // Simula la descarga creando un archivo de texto
    const content = `Contenido del examen médico: ${name}\nFecha: ${date}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    
    // Crea un enlace invisible y simula el clic para iniciar la descarga
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}_ExamenMedico.txt`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="medical-exam">
      <h3>{name}</h3>
      <p>Fecha: {date}</p>
      <button className="download-button" onClick={simulateDownload}>
        Descargar
      </button>
    </div>
  );
};

export default MedicalExam;

