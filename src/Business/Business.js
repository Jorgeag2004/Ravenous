import Card from 'react-bootstrap/Card';
import {ListGroup} from "react-bootstrap";
const business = {
    imageSrc: "https://myneighborhoodnews.com/uploads/images/News/March_2024/pollo_campero_formatted.jpg",
    name: "Pollo Campero",
    address: "11470 Cherry Hill Rd",
    city: "Silver Spring",
    state: "MD",
    zipcode: "20904",
    category: "Fried Chicken",
    rating: 4.5,
    reviewCount: 76
}

function Business() {
    return (
        <Card style={{ width : '18rem'}} bg={'white'} text={'black'}>
            <Card.Img variant="top" src={business.imageSrc} />
            <Card.Body>
                <Card.Title>{business.name}</Card.Title>
                <Card.Text>{business.address}</Card.Text>
                <Card.Text>{business.city}</Card.Text>
                <Card.Text>{business.state + " " + business.zipcode}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className={"bg-white text-black"}>{business.category}</ListGroup.Item>
                <ListGroup.Item className={"bg-white text-black"}>{business.rating}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Business;