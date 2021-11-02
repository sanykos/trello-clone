import { FC } from 'react';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { useAppState } from '../../state/AppStateContext';
import { ColumnProps } from './interfaces';
import { ColumnContainerStyled, ColumnTitleStyled } from './styles';

export const Column: FC<ColumnProps> = ({ id, text }) => {
    const { getTasksByListId } = useAppState();
    const tasks = getTasksByListId(id);
    return (
        <ColumnContainerStyled>
            <ColumnTitleStyled>{text}</ColumnTitleStyled>
            {tasks.map((task) => (
                <Card key={task.id} id={task.id} text={task.text} />
            ))}
            <AddNewItem
                toggleButtonText="toggleButtonText"
                onAdd={() => console.log('test')}
                dark
            />
        </ColumnContainerStyled>
    );
};
