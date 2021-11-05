import { FC } from 'react';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { useAppState } from '../../state/AppStateContext';
import { addTask } from '../../state/actions';
import { ColumnProps } from './interfaces';
import { ColumnContainerStyled, ColumnTitleStyled } from './styles';

export const Column: FC<ColumnProps> = ({ id, text }) => {
    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);
    console.log(tasks);
    return (
        <ColumnContainerStyled>
            <ColumnTitleStyled>{text}</ColumnTitleStyled>
            {tasks.map((task) => (
                <Card key={task.id} id={task.id} text={task.text} />
            ))}
            <AddNewItem
                toggleButtonText="toggleButtonText"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainerStyled>
    );
};
