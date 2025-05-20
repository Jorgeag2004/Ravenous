// import './CardList.css';
import React from 'react';
import Container from "react-bootstrap/Container";
import Business from '../Business/Business'

function CardList(props) {
    let businessCards = props.businesses.map(function(business){
        return (<Business imageSrc={business.imageSrc} name={business.name} address={business.address} city={business.city} state={business.state} zipcode={business.zipcode} category={business.category} rating={business.rating} reviewCount={business.reviewCount}/>);
    });
    return (
        <Container fluid>
            {businessCards}
        </Container>
    )
}

export default CardList;