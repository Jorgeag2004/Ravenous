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
                        <Business imageSrc={business.image_url} name={business.name} address={business.location.address1} city={business.location.city} state={business.location.state} zipcode={business.location.zip_code}  category={business.categories[0].title} rating={business.rating} reviewCount={business.review_count}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardList;