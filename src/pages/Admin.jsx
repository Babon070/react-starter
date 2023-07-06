import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../component/Modals/CreateBrand";
import CreateDevice from "../component/Modals/CreateDevice";
import CreateType from "../component/Modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisilbe] = useState(false)
  const [deviceVisible, setDeviceVisilbe] = useState(false)
  return (
    <Container className="d-flex flex-column">
      <Button 
      variant={"outline-dark"} 
      className="mt-2 p-2"
      onClick={() => setBrandVisible(true)}
      >
        Добавить тип
      </Button>
      <Button 
      variant={"outline-dark"} className="mt-2 p-2"
      onClick={() => setTypeVisilbe(true)}
      >
        Добавить устройства
      </Button>
      <Button 
      variant={"outline-dark"} 
      className="mt-2 p-2"
      onClick={() => setDeviceVisilbe(true)}
      >
        Добавить бренд
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateDevice show={typeVisible} onHide={() => setTypeVisilbe(false)}/>
      <CreateType show={deviceVisible} onHide={() => setDeviceVisilbe(false)}/>
    </Container>
    
  );
};

export default Admin;
