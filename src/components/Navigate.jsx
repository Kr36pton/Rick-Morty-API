import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigate(){
    return (  
        <Navbar bg="success" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">Rick & Morty Api Rest</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="secondary">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Navigate;