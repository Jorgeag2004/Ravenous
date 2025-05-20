import Card from 'react-bootstrap/Card';
import {ListGroup} from "react-bootstrap";

function Business(props) {
    return (
        <Card style={{ width : '18rem'}} bg={'white'} text={'black'}>
            <Card.Img variant="top" src={props.imageSrc} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.address}</Card.Text>
                <Card.Text>{props.city}</Card.Text>
                <Card.Text>{props.state + " " + props.zipcode}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className={"bg-white text-black"}>{props.category}</ListGroup.Item>
                <ListGroup.Item className={"bg-white text-black"}>{props.rating}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Business;