import React from 'react';
import Container from "react-bootstrap/Container";
import Business from '../Business/Business'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardList(props) {
    return (
        <Container className="py-4" style={{ maxWidth: '1200px' }}>
            <Row xs={1} md={3} className="g-4">
                {props.businesses.map((business, idx) => (
                    <Col key={idx} className="d-flex justify-content-center">
                        <Business imageSrc={business.imageSrc} name={business.name} address={business.address} city={business.city} state={business.state} zipcode={business.zipcode} category={business.category} rating={business.rating} reviewCount={business.reviewCount}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardList;