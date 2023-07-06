import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { login, registration } from "../http/userApi";
import instance from "../http";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utilis/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [formData, setFormData] = useState({
    name: "auth",
    email: "",
    password: "",
    avatar: "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png",
  });

  const click = async() => {
   instance.post('/auth/login', formData)
            .then(res => {
              console.log(res.data)
              localStorage.setItem('response', res.data)
              history.push('/')
            })
            .catch(err => console.log(err))

  };
  console.log(formData);

 

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Register" : "Authorization"}</h2>
        <Form className=" d-flex flex-column">
          <FormControl 
          className="mt-3" 
          placeholder="Enter emil..." 
          onChange={e => setFormData(e.target.value)}
          />
          <FormControl 
          className="mt-3" 
          placeholder="Enter password..."
          onChange={e => setFormData(e.target.value)}
          type='password'
          />

          <Row className="mt-2 p-3 d-flex">
            <Button onClick={click} variant="outline-success">
              {isLogin ? "Voyti" : "Registration"}
            </Button>
            {isLogin ? (
              <div className="mt-4 pl-3">
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
              </div>
            ) : (
              <div className="mt-4 pl-3">
                EcT аккаунта? <NavLink to={LOGIN_ROUTE}>Voydite</NavLink>
              </div>
            )}
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
