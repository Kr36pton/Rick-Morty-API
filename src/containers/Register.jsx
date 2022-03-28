import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'
function Register(){

    function redirect(){
        window.location='./'
    }

    return(
        <Container>
            <h1>Register</h1>
            <Row>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email" />
                    <Form.Control type="email" placeholder="Confirma tu email" />
                    <Form.Text className="text-muted">
                    No compartiremos tu email con nadie
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                    <Form.Control type="password" placeholder="Confirma tu contraseña" />
                </Form.Group>
                <Button variant="primary" onClick={redirect}>
                    Registrar
                </Button>
            </Form>
            </Row>
        </Container>
    )
}
export default Register