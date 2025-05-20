import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchArea() {
    return (
        <Navbar bg="secondary" variant="dark" className="w-100">
            <Container >
                <Navbar.Brand>Ravenous</Navbar.Brand>
                <InputGroup>
                    <InputGroup.Text>Cuisine</InputGroup.Text>
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
