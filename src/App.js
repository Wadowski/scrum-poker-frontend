import { ThemeProvider } from '@material-ui/core/styles';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import SocketProvider from './components/SocketProvider';
import Routes from './routes';
import { store } from "./utils/store";
import { theme } from "./utils/theme";

import './styles.scss';

const App = () => (
    <div className='app'>
        <StoreProvider store={ store }>
            <SocketProvider>
                <ThemeProvider theme={ theme }>
                    <Router>
                        <Routes />
                    </Router>
                </ThemeProvider>
            </SocketProvider>
        </StoreProvider>
    </div>
);

export default App;
