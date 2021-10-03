import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
export const Shop = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>col9</Col>
      </Row>
    </Container>
  );
};
