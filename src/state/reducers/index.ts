import { nanoid } from 'nanoid';
import { findItemIndexById } from '../../utils/findItemIndexById';
import { moveItem } from '../../utils/moveItem';
import { Action } from '../Actions/interfaces';
import { AppState } from '../intefaces';

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
    switch (action.type) {
        case 'ADD_LIST': {
            draft.lists.push({
                id: nanoid(),
                text: action.payload,
                tasks: []
            });
            break;
        }
        case 'ADD_TASK': {
            const { text, listId } = action.payload;
            console.log('draft', draft);
            const targetListIndex = findItemIndexById(draft.lists, listId);
            // console.log('targetListIndex', targetListIndex);
            // console.log('draft.lists[targetListIndex].tasks', draft.lists[targetListIndex]);
            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text
            });
            break;
        }
        case 'MOVE_LIST': {
            const { draggedId, hoverId } = action.payload;
            const dragIndex = findItemIndexById(draft.lists, draggedId);
            const hoverIndex = findItemIndexById(draft.lists, hoverId);
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
            break;
        }
        case 'SET_DRAGGED_ITEM': {
            draft.draggedItem = action.payload;
            break;
        }
        case 'MOVE_TASK': {
            const { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId } = action.payload;

            const sourceListIndex = findItemIndexById(
                draft.lists,
                sourceColumnId
            );

            const targetListIndex = findItemIndexById(
                draft.lists,
                targetColumnId
            );

            const dragIndex = findItemIndexById(
                draft.lists[sourceListIndex].tasks,
                draggedItemId
            );

            const hoverIndex = hoveredItemId
                ? findItemIndexById(
                    draft.lists[targetListIndex].tasks,
                    hoveredItemId
                )
                : 0;

            const item = draft.lists[sourceListIndex].tasks[dragIndex];

            draft.lists[sourceListIndex].tasks.splice(dragIndex, 1);
            draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);
            break;
        }
        default: {
            break;
        }
    }
};
