import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Button } from 'react-bootstrap';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
// import { NavLink } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={SHOP_ROUTE} style={{ color: 'white' }}>
            Купи Девайс
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button variant={'outline-light'} className="me-3">
                Админ панель
              </Button>
              <Button variant={'outline-light'}>Выйти</Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button
                variant={'outline-light'}
                onClick={() => {
                  user.setIsAuth(true);
                }}
              >
                Авторизация
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
});

export default NavBar;
