import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BrandsPanel } from "../components/BrandsPanel";
import { DeviceList } from "../components/DeviceList";
import { TypeBar } from "../components/TypeBar";

const Shop = () => {
    return(
    <Container>
        <Row className="mt-2">
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <BrandsPanel/>
                <DeviceList/>
            </Col>
        </Row>
        {/* <p>Shop page</p> */}
    </Container>)
    
}

export default Shop;