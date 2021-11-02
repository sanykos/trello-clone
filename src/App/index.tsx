import { FC } from 'react';
import { Column } from '../components/Column';
import { AddNewItem } from '../components/AddNewItem';
import { useAppState } from '../state/AppStateContext';

import { AppContainerStyled } from './styles';

export const AppContainer: FC = () => {
    const { lists } = useAppState();
    return (
        <AppContainerStyled>
            {lists.map((list) => (
                <Column key={list.id} text={list.text} id={list.id} />
            ))}
            <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
        </AppContainerStyled>
    );
};
