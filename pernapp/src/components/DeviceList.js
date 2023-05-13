import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from "..";
import {Row} from 'react-bootstrap'
import { DeviceItem } from "./DeviceItem";

export const DeviceList = observer(() => {
    const {gadget} = useContext(Context);
    return(
    <Row className="d-flex">
        {gadget.devices.map((device) =>
            <DeviceItem key={device.id} device={device}/>
        )}
    </Row>)
})
