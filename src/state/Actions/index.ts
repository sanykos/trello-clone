import { DragItem } from '../intefaces';
import { Action } from './interfaces';

export const addTask = (text: string, listId: string): Action => ({
    type: 'ADD_TASK',
    payload: { text, listId }
});

export const addList = (text: string): Action => ({
    type: 'ADD_LIST',
    payload: text
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
    type: 'MOVE_LIST',
    payload: {
        draggedId,
        hoverId
    }
});

export const setDragItem = (draggedItem: DragItem | null): Action => ({
    type: 'SET_DRAGGED_ITEM',
    payload: draggedItem
});
