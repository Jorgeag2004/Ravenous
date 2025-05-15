import './App.css';
import SearchArea from "../SearchArea/searchArea";
import CardGrid from "../CardGrid/CardGrid";

function App() {
    return (
        <div className="min-vh-100 bg-dark">
            <SearchArea />
            <CardGrid />
        </div>
    );
}

export default App;
