import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import CreateBrand from "../components/modals/CreateBrand";
// import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return(
        <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <h1 style={{'alignSelf': 'center'}}>Панель Администратора</h1>
            <Button style={{'margin': '25px'}} onClick={() => setTypeVisible(true)}>Добавить тип</Button>
            <Button style={{'margin': '25px'}} onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
            <Button style={{'margin': '25px'}} onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false) }/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false) }/>
        </div>)
}

export default Admin;