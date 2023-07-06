import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigstar from "../assets/Bigstar.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Iphone 12 pro",
    price: 500,
    rating: 5,
    img: "https://placeimg.com/640/480/tech",
  };
  const description = [
    {
      id: 1,
      title: "Оперативная память",
      description: "5 GB",
    },
    {
      id: 2,
      title: "Камера",
      description: "12 mp",
    },
    {
      id: 3,
      title: "Процессор",
      description: "Pentium 3",
    },
    {
      id: 4,
      title: "Кол-во ядер",
      description: "2",
    },
    {
      id: 5,
      title: "Аккумулятор",
      description: "4000",
    },
  ];

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center ">
            <h2 className="text-center mb-3">{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigstar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontsize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"}>Add to Card</Button>
          </Card>
        </Col>
      </Row>
      <Row className="m-2 d-flex flex-column">
        <h2 className="mb-2">Information</h2>
        {description.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title} {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
