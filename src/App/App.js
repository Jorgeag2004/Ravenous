import './App.css';
import {useState} from "react";
import SearchArea from "../SearchArea/SearchArea";
import CardList from "../CardList/CardList";

function App() {

    const [businesses, setBusinesses] = useState([]);


    return (
        <div className="bg-white h-100 w-100">
            <SearchArea setBusinesses={setBusinesses} />
            <CardList businesses={businesses}  />
        </div>
    );
}

export default App;
