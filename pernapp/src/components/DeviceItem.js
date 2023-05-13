import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';
import {Card, Col, Image} from 'react-bootstrap';
import { CARD_ROUTE } from "../utils/consts";
import ratingIcon from '../assets/star.png';

export const DeviceItem = observer(({device}) => {
    const history = useNavigate();
    return(<Col md="{3}" className="d-flex" style={{'justifyContent': 'space-around', 'marginTop': '40px'}} onClick={() => history(CARD_ROUTE + '/' + device.id)}>
        <Card className="d-flex" style={{'marginRight': '14px','height': '200px', 'width': '150px', 'cursor': 'pointer'}} border='light'>
            <Image width={'150px'} height={'auto'} src="https://m-cdn.phonearena.com/images/review/5440-wide-two_1200/Apple-iPhone-14-Pro-vs-iPhone-14-one-is-new-the-other-is-not.jpg"/>
            {device.name}
            <div style={{'alignSelf': 'flex-end'}}>
                {device.rating}
                <Image src={ratingIcon} width={'20px'} height={'auto'}/>
            </div>
        </Card>
    </Col>)
})
