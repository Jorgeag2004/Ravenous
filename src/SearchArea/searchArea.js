import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchArea() {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand>Ravenous</Navbar.Brand>
                <InputGroup>
                    <InputGroup.Text>Cusine</InputGroup.Text>
                    <Form.Control></Form.Control>
                    <InputGroup.Text>Location</InputGroup.Text>
                    <Form.Control></Form.Control>
                    <Button variant="dark" size="sm">Enter</Button>
                </InputGroup>
            </Container>
        </Navbar>
    );
}

export default SearchArea;
