import { FC, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { useAppState } from '../../state/AppStateContext';
import { moveList, addTask } from '../../state/Actions';
import { useItemDrag } from '../../utils/useItemDrag';
import { ColumnProps } from './interfaces';
import { isHidden } from '../../utils/isHidden';
import { ColumnContainerStyled, ColumnTitleStyled } from './styles';

export const Column: FC<ColumnProps> = ({ id, text, isPreview }) => {
    const { draggedItem, getTasksByListId, dispatch } = useAppState();
    const ref = useRef<HTMLDivElement>(null);
    const tasks = getTasksByListId(id);

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

    return (
        <ColumnContainerStyled isPreview={isPreview} ref={ref} isHidden={isHidden(draggedItem, "COLUMN", id)}>
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
