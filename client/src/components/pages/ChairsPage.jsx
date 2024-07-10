import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChairCard from '../ui/ChairCard';
import AddChairForm from '../ui/AddChairForm';
import useAppStore from '../../store/store';

export default function ChairsPage({ user }) {
  const chairs = useAppStore((store) => store.chairs);

  // const [loading, setLoading] = useState(false);

  return (
    <Container>
      {!!user && (
        <Row>
          <Col>
            <AddChairForm />
          </Col>
        </Row>
      )}
      <Row>
        {chairs.map((chair) => (
          <Col key={chair.id} xs={4}>
            <ChairCard chair={chair} loading={false} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
