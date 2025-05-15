import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Business from '../Business/Business'

function CardGrid() {
    return (
        <Container className="py-4" style={{ maxWidth: '1200px' }}>
            <Row xs={1} md={3} className="g-4">
                {[...Array(8)].map((_, idx) => (
                    <Col key={idx} className="d-flex justify-content-center">
                        <Business />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardGrid;