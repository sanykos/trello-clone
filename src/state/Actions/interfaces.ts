import { DragItem } from '../intefaces';

export interface AddListAction {
    type: 'ADD_LIST';
    payload: string;
}

export interface AddTaskAction {
    type: 'ADD_TASK';
    payload: { text: string; listId: string };
}

export interface moveListAction {
    type: 'MOVE_LIST';
    payload: {
        draggedId: string;
        hoverId: string;
    };
}

export interface setDraggedItemAction {
    type: 'SET_DRAGGED_ITEM';
    payload: DragItem | null;
}

export type Action = AddListAction | AddTaskAction | moveListAction | setDraggedItemAction;
