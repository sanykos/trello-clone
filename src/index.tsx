import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './App';
import { AppStateProvider } from './state/AppStateContext';

ReactDOM.render(
    <React.StrictMode>
        <AppStateProvider>
            <AppContainer />
        </AppStateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
