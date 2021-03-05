import React, { ReactElement, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, PalletModel, theme } from '../assets';
import { Header } from '../components';
import { Login } from './login';

const HomeApp = (): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState<PalletModel>(theme.pallet.dark);

    return (
        <React.Fragment>
            <ThemeProvider theme={{...theme, ...{ currentTheme: currentTheme }}} >
                <React.Fragment>
                    <GlobalStyle theme={theme} />
                    <Router>
                        <Switch>
                            <Route path='/login' exact component={Login} />
                            <Header />
                            <Route path='/' exact>
                                DESDAFIO PRA VAGA DE EMPREGO
                            </Route>
                        </Switch>
                    </Router>
                </React.Fragment>
            </ThemeProvider>
        </React.Fragment>
    );
};

export { HomeApp };