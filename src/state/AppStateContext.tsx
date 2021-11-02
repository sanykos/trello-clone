import { createContext, useContext, useReducer, FC } from 'react';
import { appStateReducer } from './reducers';
import { AppStateContextProps } from './intefaces';
import { appData } from './mocks';

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => {
    return useContext(AppStateContext);
};

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(appStateReducer, appData);
    const { lists } = appData;
    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    );
};
