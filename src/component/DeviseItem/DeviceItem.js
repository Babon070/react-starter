import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import stars from "../../assets/star.png";
import { DEVISE_ROUTE } from "../../utilis/consts";

const DeviceItem = ({ device }) => {

  console.log(device);
  const history = useHistory();
  return (
    <Col
      md={3} 
      className="mt-3"
      onClick={() => history.push(DEVISE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 195, cursor: "pointer" }} border={"light"}>
        { device
          ? <Image width={195} height={180} src={device.img} />
          : <Image width={195} height={180} src='https://cdn1.ozone.ru/s3/multimedia-x/6391435521.jpg' />

        }
        <div className=" text-black-50 mt-2 d-flex justify-content-between">
          <div>Samsung...</div>
          <div className=" d-flex justify-content-between">
            <div className="me-1">{device.rating}</div>
            <Image src={stars} width={18} height={18} />
          </div>
        </div>
        <div className="mt-2">{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
