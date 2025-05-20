import './App.css';
import SearchArea from "../SearchArea/searchArea";
import CardList from "../CardList/CardList";
import Businesses from "../businessData";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Container className="bg-dark text-light min-vh-100" >
            <SearchArea />
            <CardList businesses={Businesses} />
        </Container>
    );
}

export default App;
