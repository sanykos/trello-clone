export interface AddListAction {
    type: 'ADD_LIST';
    payload: string;
}

export interface AddTaskAction {
    type: 'ADD_TASK';
    payload: { text: string; listId: string };
}

export type Action = AddListAction | AddTaskAction;
