// Home.jsx
import React from "react";
import MedicalExam from "./MedicalExam";

const Home = () => {
  // Datos de los exámenes médicos
  const medicalExams = [
    { name: "Examen A", date: "2023-01-01" },
    { name: "Examen B", date: "2023-02-15" },
    { name: "Examen C", date: "2023-03-20" },
    { name: "Examen D", date: "2023-04-10" },
    // Agrega más exámenes médicos según sea necesario
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Aquí puede descargar sus examenes</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {medicalExams.map((exam, index) => (
          <MedicalExam key={index} name={exam.name} date={exam.date} />
        ))}
      </div>
    </div>
  );
};

export default Home;





