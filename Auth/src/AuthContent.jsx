import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AuthContent = () => {
  const handleSubmitLogin = () => {
    localStorage.setItem("isLoggedIn", true);
  };

  return (
    <div className="w-25 text-start mx-auto">
      <Form onSubmit={handleSubmitLogin}>
        <Form.Group className="mb-2">
          <Form.Label>User name</Form.Label>
          <Form.Control
            className="text-start"
            type="text"
            placeholder="User name"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="text-start"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button className="mx-auto" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AuthContent;
