import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAppStore from '../../store/store';
import axiosInstance, { setAccessToken } from '../../axiosInstance';

export default function NavBar() {
  const user = useAppStore((store) => store.user);
  const setUser = useAppStore((store) => store.setUser);
  const handleLogout = () =>
    axiosInstance('/auth/logout').then(() => {
      setUser(null);
      setAccessToken('');
    });
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">{user ? user.name : 'Гость'}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Main
          </Nav.Link>
          <Nav.Link as={NavLink} to="/chairs">
            Стулья
          </Nav.Link>
          {user ? (
            <>
              <Nav.Link as={NavLink} to="/account">
                Личный акк
              </Nav.Link>
              <Button onClick={handleLogout}>Выход</Button>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/login">
                Вход
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Регистрация
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
