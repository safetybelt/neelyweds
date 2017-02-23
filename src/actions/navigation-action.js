import { SET_PATH } from './actions';

export function setPath(path) {
    return {
        type: SET_PATH,
        path,
    };
}
