import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ChairCard from '../ui/ChairCard';
import useAppStore from '../../store/store';

export default function AccountPage() {
  const user = useAppStore((store) => store.user);
  const myChairs = useAppStore((store) => store.chairs).filter(
    (chair) => chair.ownerId === user.id,
  );
  return (
    <Container>
      <Row>
        {myChairs.map((chair) => (
          <Col key={chair.id} xs={4}>
            <ChairCard chair={chair} loading={false} user={null} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
