import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, FormControl, Modal, Row } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number));
  };

  console.log(info);

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройства
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column">
          <Dropdown>
            <Dropdown.Toggle> Selected</Dropdown.Toggle>
            <DropdownMenu>
              {device.types.map((type) => (
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <Dropdown className="mt-2">
            <Dropdown.Toggle> Selected</Dropdown.Toggle>
            <DropdownMenu>
              {device.types.map((type) => (
                <DropdownItem key={type.id}>{type.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>

          <FormControl
            placeholder="Введите название устройства"
            className="mt-3"
          />
          <FormControl
            placeholder="Введите стоимость устройства"
            type="number"
            className="mt-3"
          />
          <FormControl type="file" className="mt-3" />

          <Button className="mt-3" variant={"outline-dark"} onClick={addInfo}>
            Добавить новое устройство
          </Button>
          {info.map((i) => (
            <Row key={i.number} className='mt-4'>
              <Col md={4}>
                <FormControl placeholder="Введите название свойства" />
              </Col>
              <Col md={4}>
                <FormControl placeholder="Введите описание свойства" />
              </Col>
              <Col md={4}>
                <Button 
                    onClick={() => removeInfo(i.number)}
                    variant={'outline-danger'}>
                    Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>
          Добавить
        </Button>
        <Button variant={"outline-success"} onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
