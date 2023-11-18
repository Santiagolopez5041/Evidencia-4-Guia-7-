// LoginBox.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    if (username === "ABC" && password === "12345") {
      // Redirige a la página de inicio después de la autenticación exitosa
      navigate("/home");
    } else {
      // Maneja el caso en el que la autenticación falla (puedes mostrar un mensaje de error, por ejemplo)
      alert("Autenticación fallida. Verifica el nombre de usuario y la contraseña.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          width: 200,
          height: 200,
          margin: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: 100,
            height: 50,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: 100,
            height: 50,
            borderRadius: 5,
            marginBottom: 10,
          }}
        />
        <button
          type="submit"
          style={{
            width: 100,
            height: 50,
            borderRadius: 5,
          }}
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default LoginBox;



