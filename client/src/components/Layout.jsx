import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import SimpleModal from './ui/SimpleModal';

export default function Layout() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
      <SimpleModal />
    </Container>
  );
}
