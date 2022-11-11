import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameRef = useRef();
  const passRef = useRef();

  const nameHandler = () => {
    const nameVal = nameRef.current.value;
    setName(nameVal);
  };
  const passHandler = () => {
    const passVal = passRef.current.value;
    setPassword(passVal);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "elsen",
        password: "12345",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [name, password]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            onChange={nameHandler}
            type="text"
            placeholder="Enter name"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            onChange={passHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onSubmit={formSubmitHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
