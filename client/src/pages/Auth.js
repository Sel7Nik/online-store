import { Container, Form, Row, Card, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

export const Auth = () => {
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control className="mt-3" placeholder="Введите ваш email..." />
            <Form.Control
              className="mt-3"
              placeholder="Введите ваш пароль..."
              type="password"
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
              {isLogin ? (
                <div style={{ display: 'block' }}>
                  Нет аккаунта?{' '}
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div style={{ display: 'block' }}>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}
              <Button
                className="mt-3"
                style={{ display: 'block' }}
                variant={'outline-success'}
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
};
