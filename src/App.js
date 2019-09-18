import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import ROUTES from './assets/routes';
import LoginComponent from './pages/login/LoginComponent'
import RegisterComponent from './pages/register/RegisterComponent'
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Route exact path={ROUTES.HOME_PAGE}/>
                <Route path={ROUTES.LOGIN_PAGE} component={LoginComponent}/>
                <Route path={ROUTES.REGISTER_PAGE} component={RegisterComponent}/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
