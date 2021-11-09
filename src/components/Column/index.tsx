import { FC, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { useAppState } from '../../state/AppStateContext';
import { moveList, addTask } from '../../state/actions';
import { useItemDrag } from '../../utils/useItemDrag';
import { ColumnProps } from './interfaces';
import { ColumnContainerStyled, ColumnTitleStyled } from './styles';

export const Column: FC<ColumnProps> = ({ id, text }) => {
    const { draggedItem, getTasksByListId, dispatch } = useAppState();
    const ref = useRef<HTMLDivElement>(null);
    const tasks = getTasksByListId(id);

    // console.log('draggedItem', draggedItem);

    const { drag } = useItemDrag({ type: 'COLUMN', id, text });

    const [, drop] = useDrop({
        accept: 'COLUMN',
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type === 'COLUMN') {
                if (draggedItem.id === id) {
                    return;
                }
            }
            dispatch(moveList(draggedItem.id, id));
        }
    });

    drag(drop(ref));
    //  console.log(tasks);
    return (
        <ColumnContainerStyled ref={ref}>
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
