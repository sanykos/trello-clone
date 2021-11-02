import { createContext, useContext, FC } from 'react';
import { appData } from './mocks';
import { AppStateContextProps } from './intefaces';

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const useAppState = () => {
    return useContext(AppStateContext);
};

export const AppStateProvider: FC = ({ children }) => {
    const { lists } = appData;
    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    };
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            {children}
        </AppStateContext.Provider>
    );
};
