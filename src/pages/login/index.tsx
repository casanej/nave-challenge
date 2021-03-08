import React, { ReactElement, useEffect, useState } from 'react'
import { useStores } from '../../stores';
import { Button, Container, FormGroup, Input } from '../../components';
import { FormLogin, FormLoginContainer } from './index.styles';

export const Login = (): ReactElement => {
    const { authStore } = useStores();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        if(authStore.user.token !== '') window.location.href = '/';
    })

    const makeLogin = () => {
        authStore.login(email, password);
    }

    return (
        <Container alignVertical alignHorizontal fullscreen>
            <FormLogin>
                <div>
                    <img src='http://casanje.com/projects/nave-rs/assets/logo.png' />
                </div>
                <FormLoginContainer>
                    <FormGroup>
                        <Input label='Email' id='email' onChange={(value) => setEmail(value)} ></Input>
                    </FormGroup>

                    <FormGroup>
                        <Input label='Senha' id='password' type='password' onChange={(value) => setPassword(value)} ></Input>
                    </FormGroup>

                    <FormGroup>
                        <Button onClick={makeLogin} >Entrar</Button>
                    </FormGroup>
                </FormLoginContainer>
            </FormLogin>
        </Container>
    );
};
