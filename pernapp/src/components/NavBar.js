import React, {useContext} from 'react';
import {Context} from '../index.js';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';

import { SHOP_ROUTE, AUTH_ROUTE, ADMIN_ROUTE } from '../utils/consts.js';
import { observer } from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

export const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useNavigate();
    return(
        <Navbar bg="dark">
        <Container>
          <Navbar.Brand href={SHOP_ROUTE}>GadgetStore</Navbar.Brand>
          <Navbar.Toggle />
          {user.isAuth ? 
            <Navbar.Collapse className="justify-content-end">
              <Button variant='outline-light' onClick={() => history(ADMIN_ROUTE)}>Панель администратора</Button>
              <Button variant='outline-light' onClick={() => {history(AUTH_ROUTE); user.setAuthState(false)}}>Выйти</Button>
            </Navbar.Collapse>
            :
            <Navbar.Collapse className="justify-content-end">
                <Button variant='outline-light' onClick={() => user.setAuthState(true)} >Авторизация</Button>
            </Navbar.Collapse>}
        </Container>
      </Navbar>

    )
})