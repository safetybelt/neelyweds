import { SET_PATH } from 'actions';

const initialState = {
    path: 'about',
};

export function navigation(state = initialState, action) {
    switch (action.type) {
        case SET_PATH:
            return Object.assign({}, state, {
                path: action.path,
            });
        default:
            return state;
    }
}
