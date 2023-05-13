import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({show, onHide}) => {
    const {gadget} = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        // console.log('info', info);
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return(
        <div>
    <Modal
        show={show}
        onHide={onHide}
        centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Добавить новое устройство
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className="mt-3 mb-2">
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {gadget.gadgetTypes.map(gadgetType => 
                            <Dropdown.Item key={gadgetType.id}>
                                {gadgetType.name}
                            </Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {gadget.brands.map(brand => 
                            <Dropdown.Item key={brand.id}>
                                {brand.name}
                            </Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control className="mt-3" placeholder={"Введите название устройства"}/>
                <Form.Control className="mt-3" placeholder={"Введите стоимость устройства"} type="number"/>
                <Form.Control className="mt-3" type="file"/>
                <hr/>
                <Button variant="outline-dark" onClick={() => addInfo()}>Добавить новое свойство</Button>
                {info.map(i =>
                    <Row key={i.number} className="mt-2">
                        <Col>
                            <Form.Control placeholder="Введите название свойства"/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Введите описание свойства"/>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={() => removeInfo(i.number)}>Удалить</Button>
                        </Col>
                    </Row>)}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={onHide}>Добавить устройство</Button>
        </Modal.Footer>
    </Modal>
    </div>
    )
}

export default CreateDevice;
