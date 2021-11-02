import { Action } from '../Actions/interfaces';
import { AppState } from '../intefaces';

export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};
