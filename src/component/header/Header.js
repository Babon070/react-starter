import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { Context } from "../..";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utilis/consts";

const Header = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory()
  return (
    <Navbar bg="dark" className="">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Buy Elektronik
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className="me-2">Admin panel</Button>
            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)} >
              Log out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Registration
            </Button>
          </Nav> 
        )}
      </Container>
    </Navbar>
  );
});

export default Header;
