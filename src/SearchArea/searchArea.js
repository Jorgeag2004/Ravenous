import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import ToggleButttonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {ToggleButtonGroup} from "react-bootstrap";

function SearchArea() {
    return (
           <Navbar bg="secondary" variant="dark" className="w-100">
              <Stack gap={3}>
                  <Container >
                      <Navbar.Brand>Ravenous</Navbar.Brand>
                      <InputGroup>
                          <InputGroup.Text style={{backgroundColor: 'darkgrey'}}>Cuisine</InputGroup.Text>
                          <Form.Control></Form.Control>
                          <InputGroup.Text style={{backgroundColor: 'darkgrey'}}>Location</InputGroup.Text>
                          <Form.Control></Form.Control>
                          <Button variant="dark" size="sm">Enter</Button>
                      </InputGroup>
                  </Container>
                  <Container className={"bg-secondary d-flex justify-content-center align-items-center"}>
                      <ToggleButtonGroup type={"checkbox"} name={"Search Options"}>
                         <ToggleButton value={1}>Best Match</ToggleButton>
                          <ToggleButton value={2}>Highest Rated</ToggleButton>
                          <ToggleButton value={3}>Most Reviewed</ToggleButton>
                      </ToggleButtonGroup>
                  </Container>
              </Stack>
           </Navbar>
    );
}

export default SearchArea;
