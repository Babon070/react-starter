import React, { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Context } from "../..";

const BrandBar = () => {
  const { device } = useContext(Context);
  console.log(device.brands);

  return (
    <Row>
      <Col className="d-flex">
        {device.brands.map((brand) => (
          <Card className="p-3 me-1" 
          key={brand.id}
          style={{cursor: 'pointer'}}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand?.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        ))}
      </Col>
    </Row>
  );
};

export default BrandBar;
