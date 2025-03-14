import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const navigator = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleUsernameChange = (e) => {
    setUser({
      ...user,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (user.username === "admin" && user.password === "pass") {
      navigator("/lista");
    }
    else {
      setHasError(true);
    }
  };

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
    });
    setHasError(false);
  }

  return (
    <div>
      <h1 className="text-center">Inicio de sesión</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre del usuario</Form.Label>
          <Form.Control
            type="username"
            name="username"
            value={user.username}
            onChange={handleUsernameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit" className="w-50 m-2">
            Ingresar
          </Button>
          <Button variant="danger" onClick={resetForm} className="w-50 m-2">
            Cancelar
          </Button>
        </div>
        {hasError && (
          <p className="text-danger">Error de autenticación. Revise sus credenciales</p>
        )}
      </Form>
    </div>
  );
}
