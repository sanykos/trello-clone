import { Dispatch } from 'react';
import { Action } from './actions/interfaces';

export type Task = {
    id: string;
    text: string;
};

export type List = {
    id: string;
    text: string;
    tasks: Task[];
};

export type ColumnDragItem = {
    id: string;
    text: string;
    type: 'COLUMN';
};

export type DragItem = ColumnDragItem;

export type AppState = {
    lists: List[];
    draggedItem: DragItem | null;
};

export type AppStateContextProps = {
    lists: List[];
    draggedItem: DragItem | null;
    getTasksByListId(id: string): Task[];
    dispatch: Dispatch<Action>;
};
