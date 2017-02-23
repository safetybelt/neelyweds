import { SET_LOADING } from 'actions';

const initialState = {
    isLoading: false,
};

export function loading(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return Object.assign({}, state, {
                isLoading: action.loading,
            });
        default:
            return state;
    }
}
