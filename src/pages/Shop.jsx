import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BrandBar from '../component/brandBar/BrandBar';
import DeviceList from '../component/deviceList/DeviceList';
import TypeBar from '../component/typebar/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'
            >
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;
