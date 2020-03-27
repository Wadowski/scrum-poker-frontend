import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

import SocketProvider from './components/SocketProvider';
import Routes from './routes';
import './styles.scss';

const theme = createMuiTheme({
    palette: {
        primary: green,
    }
});

const App = () => (
    <div className='app'>
        <SocketProvider >
            <ThemeProvider theme={ theme }>
                <Router>
                    <Routes />
                </Router>
            </ThemeProvider>
        </SocketProvider>
    </div>
);

export default App;
