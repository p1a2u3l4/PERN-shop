import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {
    return(
    <div>
        <Modal
            show={show}
            onHide={onHide}
            centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый бренд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control placeholder={"Введите название бренда"}/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={onHide}>Добавить бренд</Button>
        </Modal.Footer>
        </Modal>
    </div>
    )
}

export default CreateBrand;


