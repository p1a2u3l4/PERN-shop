import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateType = ({show, onHide}) => {
    return(
        <div>
    <Modal
        show={show}
        onHide={onHide}
        centered>
    <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter">
        Добавить новый тип
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Control placeholder={"Введите название типа"}/>
        </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
    <Button variant="outline-success" onClick={onHide}>Добавить тип</Button>

    </Modal.Footer>
    </Modal>
    </div>
    )
}

export default CreateType;

