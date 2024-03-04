import { Modal, Button, Form } from 'react-bootstrap';
import { useRef, useState } from 'react';

import { useForm } from '../hooks/useForm';

export default function AddTodoModal() {
    
    const {formValues, onChangeHandler, onSubmit} = useForm({
        text: ''
    }, (values) => {
        console.log(values)
    })


    return (
        <Modal show={true}>
            <Modal.Header closeButton>
            <Modal.Title>Add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name="text" placeholder="Do The dishes" value={formValues.name} onChange={onChangeHandler} />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{marginRight: '10px'}}>
                        Submit
                    </Button>

                    <Button variant="secondary">Close</Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
}