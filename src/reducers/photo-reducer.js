import { SET_ACTIVE_PHOTO } from 'actions';

const initialState = {
    active: 0,
};

export function photo(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_PHOTO:
            return Object.assign({}, state, { active: action.active });
        default:
            return state;
    }
}
