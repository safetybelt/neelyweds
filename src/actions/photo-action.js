import { SET_ACTIVE_PHOTO } from './actions';

export function setActivePhoto(active) {
    return {
        type: SET_ACTIVE_PHOTO,
        active,
    };
}
