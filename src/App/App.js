import './App.css';
import SearchArea from "../SearchArea/searchArea";
import CardList from "../CardList/CardList";
import Businesses from "../businessData";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <div className="bg-black h-100 w-100">
            <SearchArea />
            <CardList businesses={Businesses} />
        </div>
    );
}

export default App;
