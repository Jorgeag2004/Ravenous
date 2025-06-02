import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Stack from 'react-bootstrap/Stack';
import SearchPreferenceToggle from './SearchPreferenceToggle';
import {useEffect, useState} from "react";
import getBusiness from "../utils/yelpAPI";

function SearchArea({setBusinesses}) {

   const [searchInput, setSearchInput] = useState('');

   const [location, setLocation] = useState('');

   const [sortingChoice, setSortingChoice] = useState('best_match');

   const handleSearchInputChange = (event) => {
       setSearchInput(event.target.value);
   }

   const handleLocationInputChange = (event) => {
       setLocation(event.target.value);
   }

   const handleSortingChoice = (value) => {
        setSortingChoice(value);
   }

   const handleEnter = async (event) => {
       const businesses = await getBusiness(searchInput, location, sortingChoice);
       setBusinesses(businesses);
   }

    return (
           <Navbar bg="secondary" variant="dark" className="w-100">
              <Stack gap={3}>
                  <Container >
                      <Navbar.Brand>Ravenous</Navbar.Brand>
                      <InputGroup>
                          <InputGroup.Text style={{backgroundColor: 'darkgrey'}}>Cuisine</InputGroup.Text>
                          <Form.Control onChange={handleSearchInputChange}></Form.Control>
                          <InputGroup.Text style={{backgroundColor: 'darkgrey'}}>Location</InputGroup.Text>
                          <Form.Control onChange={handleLocationInputChange}></Form.Control>
                          <Button variant="dark" size="sm" onClick={handleEnter}>Enter</Button>
                      </InputGroup>
                  </Container>
                  <Container className={"bg-secondary d-flex justify-content-center align-items-center"}>
                      <SearchPreferenceToggle handleSortingChoice={handleSortingChoice}/>
                  </Container>
              </Stack>
           </Navbar>
    );
}

export default SearchArea;
