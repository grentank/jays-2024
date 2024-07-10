import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import axiosInstance from '../../axiosInstance';
import useAppStore from '../../store/store';

export default function AddChairForm() {
  const addChair = useAppStore((store) => store.addChair);
  const addChairHandler = async (formData) => {
    const res = await axiosInstance.post('/chairs', formData);
    if (res.status === 201) {
      addChair(res.data);
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        addChairHandler(formData);
      }}
    >
      <FloatingLabel
        controlId="floatingInput"
        label="Название стула"
        className="mb-3"
      >
        <Form.Control name="name" type="text" placeholder="Название стула" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Ссылка на изображение"
        className="mb-3"
      >
        <Form.Control name="image" type="url" placeholder="http://..." />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Описание стула"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          name="description"
          type="text"
          placeholder="Описание стула"
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Добавить стул
      </Button>
    </Form>
  );
}
