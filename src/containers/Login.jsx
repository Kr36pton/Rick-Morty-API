import React from 'react'
import { Container, Row, Form, Button } from 'react-bootstrap'

function Login(){
    function redirect(){
        window.location='./home'
    }
    return(
        <Container>
            <h1>Login</h1>
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Direccion de Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa Email" />
                        <Form.Text className="text-muted">
                        No compartiremos tu email con nadie
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contrsaeña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Mantenerme Loggeado" />
                    </Form.Group>
                    <Button variant="primary" onClick={redirect}>
                        Ingresar
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}
export default Login