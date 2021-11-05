import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import { AppContainer } from './App';
import { AppStateProvider } from './state/AppStateContext';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <DndProvider backend={Backend}>
            <AppStateProvider>
                <AppContainer />
            </AppStateProvider>
        </DndProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
