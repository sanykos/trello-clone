import { FC } from 'react';
import { CustomDragLayer } from '../components/CustomDragLayer'
import { addList } from '../state/Actions';
import { Column } from '../components/Column';
import { AddNewItem } from '../components/AddNewItem';
import { useAppState } from '../state/AppStateContext';

import { AppContainerStyled } from './styles';

export const AppContainer: FC = () => {
    const { lists, dispatch } = useAppState();
    return (
        <AppContainerStyled>
            <CustomDragLayer />
            {lists.map((list) => (
                <Column key={list.id} text={list.text} id={list.id} />
            ))}
            <AddNewItem
                toggleButtonText="+ Add another list"
                onAdd={(text) => dispatch(addList(text))}
            />
        </AppContainerStyled>
    );
};
