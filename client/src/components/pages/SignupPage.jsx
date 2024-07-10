import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAppStore from '../../store/store';
import axiosInstance, { setAccessToken } from '../../axiosInstance';

export default function SignupPage() {
  const setUser = useAppStore((store) => store.setUser);
  const handleSignup = async (signupData) => {
    try {
      const res = await axiosInstance.post('/auth/signup', signupData);
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
      console.log(res);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeat: '',
    name: '',
  });
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (formData.repeat !== formData.password)
          return alert('Пароли не совпадают');
        handleSignup(formData);
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Эл.Почта</Form.Label>
        <Form.Control
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="mail@mail.com"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRepeat">
        <Form.Label>Пароль повторно</Form.Label>
        <Form.Control
          name="repeat"
          value={formData.repeat}
          onChange={handleChange}
          type="password"
          isValid={
            formData.repeat.length > 0 && formData.repeat === formData.password
          }
          isInvalid={
            formData.repeat.length > 0 && formData.repeat !== formData.password
          }
        />
        <Form.Control.Feedback type="invalid">
          Пароли не совпадают
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Создать аккаунт
      </Button>
    </Form>
  );
}
