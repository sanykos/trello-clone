import { nanoid } from 'nanoid';
import { findItemIndexById } from '../../utils/findItemIndexById';
import { Action } from '../actions/interfaces';
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
        default: {
            break;
        }
    }
};
