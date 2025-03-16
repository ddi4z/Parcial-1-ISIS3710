import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function AuthPage() {
  const navigator = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setUser({
      ...user,
      login: e.target.value,
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
    const url = "http://localhost:3001/login";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["status"] === "success") {
          navigator("/lista"); 
        }
        else {
          setHasError(true);
        }
      })
      .catch(() => {
        setHasError(true);
      });
  };

  const resetForm = () => {
    setUser({
      login: "",
      password: "",
    });
    setHasError(false);
  }

  return (
    <div>
      <h1 className="text-center">
        <FormattedMessage id="auth-title" />
      </h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold"><FormattedMessage id="auth-user" /></Form.Label>

          <Form.Control
            style={{
              backgroundColor: '#D9D9D9',
              borderColor: hasError ? 'red' : '',
              borderRadius: '0'
            }}
            type="login"
            name="login"
            value={user.login}
            onChange={handleLoginChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold"><FormattedMessage id="auth-password" /></Form.Label>
          <Form.Control
            style={{
              backgroundColor: '#D9D9D9',
              borderColor: hasError ? 'red' : '',
              borderRadius: '0'
            }}
            type="password"
            name="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button
            className="w-50 fw-bold"
            style={{
              backgroundColor: '#003B93',
              borderRadius: '0',
              border: 'none',
              marginRight: '8px'
            }}
            type="submit"
          >
            <FormattedMessage id="auth-log-in" />
          </Button>
          <Button
            className="text-dark w-50 fw-bold"
            style={{
              backgroundColor: '#E75D5D',
              borderRadius: '0',
              border: 'none',
              marginLeft: '8px'
            }}
            onClick={resetForm}
          >
            <FormattedMessage id="auth-cancel" />
          </Button>
        </div>
        {hasError && (
          <p className="text-danger mt-4 fw-bold"><FormattedMessage id="auth-error" /></p>
        )}
      </Form>
    </div>
  );
}
