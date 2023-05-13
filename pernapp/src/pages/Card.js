import React from "react";
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import ratingIcon from '../assets/star.png'


const Card = () => {

    const device = {id: 1, name: 'Apple IPhone 12', rating: 4, price: '95000 руб'}
    const details = [
        {id: 1, title: 'Оперативная память', details: '3Gb', description: 'rty'},
        {id: 2, title: 'Камера', details: '15Mpx',   description: 'rty'},
        {id: 3, title: 'Процессор', details: '2Gb', description: 'rty'},
        {id: 4, title: 'Камера', details: '15Mpx',  description: 'rty'}]
    return(
    <Container>
        <Col>
            <Image width={'500px'} height={'auto'} src="https://m-cdn.phonearena.com/images/review/5440-wide-two_1200/Apple-iPhone-14-Pro-vs-iPhone-14-one-is-new-the-other-is-not.jpg"/>
        </Col>
        <Col>
            <Row>
                <h2>{device.name}</h2>
                <div style={{'alignSelf': 'flex-end'}}>
                    {device.rating}
                    <Image src={ratingIcon} width={'20px'} height={'auto'}/>
                </div>
            </Row>
        </Col>
        <Col>
            <h3>{device.price}</h3>
            <Button>Добавить в корзину</Button>
            
            <Row style={{'width': '250px', 'paddingLeft': '15px'}}>
                <h1>Характеристики:</h1>
                {details.map((detail) => 
                    <Row style={{ 'width': '250px', 'display': 'flex', 'flexDirection': 'column', 'marginRight': '20px'}} key={detail.id}>{detail.title}:{detail.details}</Row>
                )}
            </Row>
            
        </Col>
    </Container>)
    
}

export default Card;
