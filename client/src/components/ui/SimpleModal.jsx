import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAppStore from '../../store/store';

export default function SimpleModal() {
  const show = useAppStore((state) => state.modalIsOpen);
  const handleClose = useAppStore((state) => state.toggleModal);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
