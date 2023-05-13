
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userAPI";
import { REG_ROUTE, AUTH_ROUTE } from "../utils/consts";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === AUTH_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async() => {
        let userData;
        if (isLogin) {
            userData = await login(email, password);
            console.log('ответ', user);

        } else {
            userData = await registration(email, password);
            console.log('ответ', user);
        }
        user.setUserInfo(userData);
        user.setAuthState(true);
    }

    return(
    <Container className="d-flex justify-content-center align-items-center" style={{height: '200px', 'marginTop': '10%', width: '500px'}}>
        <Card style={{width: '100%'}}>
            <h3 className="d-flex justify-content-center align-items-center" style={{'marginTop': '15px'}}>{isLogin ? 'Окно Авторизации' : 'Окно Регистрации'}</h3>
            <Form>
                <Form.Control style={{'marginTop': '15px'}} placeholder="логин" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Control style={{'marginTop': '15px'}} placeholder="пароль" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                <Row style={{width: '100%', 'marginLeft': 0}} className="justify-content-between">
                    <Button className="align-self-start" variant={'outline-success'} style={{'marginTop': '15px'}} onClick={() => signIn()}>Войти</Button>
                    <Button className="align-self-end" variant={'outline-primary'} style={{'marginTop': '15px'}} onClick={() => signIn()}>Регистрация</Button>
                </Row>
            </Form>
        </Card>
    </Container>)
})

export default Auth;