import { SET_LOADING } from './actions';

export function setLoading(loading) {
    return {
        type: SET_LOADING,
        loading,
    };
}
