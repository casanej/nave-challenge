import axios from 'axios';
import React, { ReactElement, useState } from 'react'
import { Button, Container, FormGroup, Input } from '../../components';
import { FormLogin, FormLoginContainer } from './index.styles';

export const Login = (): ReactElement => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const makeLogin = () => {
        console.log('[LOGIN]', email, password);

        const URL = process.env.API_URL || '';

        axios.post(URL, { email, password })
            .then(response => {
                console.log('response', response);
            })
    }

    return (
        <Container alignVertical alignHorizontal>
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
