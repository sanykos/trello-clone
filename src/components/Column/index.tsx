import { FC, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { AddNewItem } from '../AddNewItem';
import { Card } from '../Card';
import { useAppState } from '../../state/AppStateContext';
import { moveList, addTask, moveTask, setDragItem } from '../../state/Actions';
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
        accept: ['COLUMN', 'CARD'],
        hover() {
            if (!draggedItem) {
                return;
            }
            if (draggedItem.type === 'COLUMN') {
                if (draggedItem.id === id) {
                    return;
                }
                dispatch(moveList(draggedItem.id, id));
            } else {
                if (draggedItem.columnId === id) {
                    return
                }
                if (tasks.length) {
                    return
                }
                dispatch(
                    moveTask(draggedItem.id, null, draggedItem.columnId, id)
                );
                dispatch(setDragItem({ ...draggedItem, columnId: id }))
            }

        }
    });

    drag(drop(ref));

    return (
        <ColumnContainerStyled isPreview={isPreview} ref={ref} isHidden={isHidden(draggedItem, "COLUMN", id)}>
            <ColumnTitleStyled>{text}</ColumnTitleStyled>
            {tasks.map((task) => (
                <Card key={task.id} id={task.id} text={task.text} columnId={id} />
            ))}
            <AddNewItem
                toggleButtonText="toggleButtonText"
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainerStyled>
    );
};
