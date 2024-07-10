import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import useAppStore from '../../store/store';

export default function LoginPage() {
  const setUser = useAppStore((store) => store.setUser);
  const handleLogin = async (formData) => {
    try {
      const res = await axiosInstance.post('/auth/login', formData);
      setUser(res.data.user); // res.data = { user: {}, accessToken: '' }
      setAccessToken(res.data.accessToken);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        setLoading(true);
        handleLogin(formData).finally(() => setLoading(false));
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Эл.Почта</Form.Label>
        <Form.Control name="email" type="email" placeholder="mail@mail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control name="password" type="password" />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? 'Вход...' : 'Войти'}
      </Button>
    </Form>
  );
}
