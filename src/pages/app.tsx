import React, { ReactElement, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, PalletModel, theme } from '../assets';
import { Header, ProtectedRoute, ModalManager } from '../components';
import { Home } from './home';
import { Login } from './login';

const HomeApp = (): ReactElement => {
    const [currentTheme, setCurrentTheme] = useState<PalletModel>(theme.pallet.light);
    const [showHeader, setShowHeader] = useState(true);

    useState(() => {
        setCurrentTheme(theme.pallet.light);
        if(window.location.pathname === '/login') {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    })

    return (
        <React.Fragment>
            <ThemeProvider theme={{...theme, ...{ currentTheme: currentTheme }}} >
                <React.Fragment>
                    <GlobalStyle theme={theme} />
                    <Router>
                        { showHeader && <Header />}
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <ProtectedRoute exact path='/' component={Home} />
                        </Switch>
                        <ModalManager />
                    </Router>
                </React.Fragment>
            </ThemeProvider>
        </React.Fragment>
    );
};

export { HomeApp };